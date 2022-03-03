declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RCP: string;
    }
  }
}

export {};
