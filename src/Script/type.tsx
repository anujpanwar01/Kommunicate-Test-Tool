export interface Window {
  kommunicate?: any;
}
export interface Options {
  [key: string]: any;
}

export interface KommunicateType {
  init(appId: string, options?: Options): void;
  logout(): void;
}

export const appWindow: Window & typeof globalThis = window;
