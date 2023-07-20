declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL;
      JWT_SECRET;
    }
  }
}

export {};
