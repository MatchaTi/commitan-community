import {
  ErrorResponse,
  ILogin,
  IRegister,
  IVerify,
  LoginResponse,
  RegisterResponse,
  VerifyResponse,
} from '@/interfaces/auth';
import axios, { AxiosError } from 'axios';
import { jwtVerify } from 'jose';

export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length === 0) throw new Error('ENV JWT_SECRET is not set.');

  return secret;
}

export async function verifyToken(token: string) {
  try {
    const decodedToken = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
    return decodedToken.payload;
  } catch (error) {
    return { error };
  }
}

export async function login({ email, password }: ILogin): Promise<LoginResponse> {
  try {
    const res = await axios.post(`${process.env.API_URL}/auth/login`, { email, password });
    const { message, token } = res.data;
    const decodedToken: any = await verifyToken(token);

    if (decodedToken.error) throw 'Invalid Token';
    return { message, decodedToken, token };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      return {
        status: axiosError.response?.status,
        message: axiosError.response?.data.error[0].msg,
      };
    } else {
      return { status: 400, message: error };
    }
  }
}

export async function register({ fullname, email, password }: IRegister): Promise<RegisterResponse> {
  try {
    const res = await axios.post(`${process.env.API_URL}/auth/register`, { fullname, email, password });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      return {
        status: axiosError.response?.status,
        message: axiosError.response?.data.error[0].msg,
      };
    } else {
      return { status: 500, message: 'Terjadi Error' };
    }
  }
}

export async function otpVerify({ email, otp_number }: IVerify): Promise<VerifyResponse> {
  try {
    const res = await axios.post(`${process.env.API_URL}/auth/otp-verify`, { email, otp_number });
    const { message, token } = res.data;
    const decodedToken: any = await verifyToken(token);

    if (decodedToken.error) throw 'Invalid Token';
    return { message, token };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      return {
        status: axiosError.response?.status,
        message: axiosError.response?.data.error[0].msg,
      };
    } else {
      return { status: 400, message: error };
    }
  }
}
