declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL;
      JWT_SECRET;
      SOCKET_URL;
      SOCKET_HEADER;
    }
  }
}

export {};
