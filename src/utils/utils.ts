import axios from 'axios';

export function cn(...cns: Array<string>) {
  return cns.join(' ');
}

export const axiosWithCors = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/json',
  },
});
