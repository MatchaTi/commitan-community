export interface Token {
  username: string;
  roles: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  fullname: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  status?: number;
  message?: any;
  token?: string;
  decodedToken?: any;
}

export interface RegisterResponse {
  status?: number;
  message?: string;
  error?: Array<{ msg: string }>;
}

export interface ErrorResponse {
  error: Array<{ msg: string }>;
}

export interface IVerify {
  email: string;
  otp_number: string;
}

export interface VerifyResponse {
  status?: number;
  message?: any;
  token?: string;
  error?: Array<{ msg: string }>;
}
