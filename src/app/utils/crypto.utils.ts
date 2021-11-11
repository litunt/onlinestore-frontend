import * as CryptoJS from 'crypto-js';

const secretKey = CryptoJS.enc.Utf8.parse("OnlineStoreSecretKey");
const IV = CryptoJS.enc.Utf8.parse("OnlineStoreSecretKey");

export const encrypt = (s: string) => {
  let encrypted = CryptoJS.AES.encrypt(s, secretKey, {
      keySize: 16,
      iv: IV,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
  return encrypted.toString();
}

export const decrypt = (s: string) => {
  let decrypted = CryptoJS.AES.decrypt(s, secretKey, {
      keySize: 16,
      iv: IV,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
