import * as CryptoJS from 'crypto-js';

const encryptionKey = process.env.REACT_APP_MY_ENC_KEY;

const LocalStorage = {
  encryptData: (data: string): string => {
    if (!encryptionKey) return data;

    return CryptoJS.AES.encrypt(data, encryptionKey).toString();
  },

  decryptData: (encryptedData: string): string => {
    if (!encryptionKey) return encryptedData;

    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  },
  setItem: (key: string, value: string) => {
    const encValue = LocalStorage.encryptData(value);
    localStorage.setItem(key, encValue);
  },
  getItem: (key: string) => {
    const encValue = localStorage.getItem(key);
    if (encValue) {
      const enc = LocalStorage.decryptData(encValue);
      return LocalStorage.parse(enc);
    }
  },
  stringify: function (key: any): string {
    return JSON.stringify(key);
  },
  parse: function (key: string): any {
    let str: string;
    try {
      str = JSON.parse(key);
    } catch (err) {
      throw err;
    }
    return str;
  },
};

export default LocalStorage;

// const appWindow: Window & typeof globalThis = window & typeof globalThis;
// appWindow.LocalStorage = LocalStorage;
// const myWindow: Window & typeof this = window & typeof this;
