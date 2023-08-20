export interface Window {
  kommunicate?: any;
  Kommunicate?: any;
}
export interface Options {
  [key: string]: any;
}

export interface KommunicateType {
  init(appId: string, options?: Options, server?: string): void;
  logout(): void;
}

export const appWindow: Window & typeof globalThis = window;
