import CryptoJS from "crypto-js";

const BLOCK_SIZE = 16;

export const decrypt = (text) => {
  // split iv and ciphertext
  const PSK = "1234567890a234561234567890a23456";

  const [iv, ciphertext] = split(CryptoJS.enc.Base64.parse(text));
  var key = CryptoJS.enc.Utf8.parse(PSK);
  // var key = CryptoJS.enc.Utf8.parse(process.env.PSK);
  // decryption
  const cryptoConfig = { iv, mode: CryptoJS.mode.CFB };
  var decrypted = CryptoJS.AES.decrypt({ ciphertext }, key, cryptoConfig);
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export const encrypt = (text) => {
  // split iv and ciphertext
  const PSK = "1234567890a234561234567890a23456";

  var iv = CryptoJS.lib.WordArray.random(BLOCK_SIZE);
  const ciphertext = CryptoJS.enc.Utf8.parse(JSON.stringify(text));
  var key = CryptoJS.enc.Utf8.parse(PSK);

  // encrypted
  const config = { iv, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CFB };
  var encrypted = CryptoJS.AES.encrypt(ciphertext, key, config);
  return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
};

const split = (wordsArray, size = BLOCK_SIZE) => {
  var iv = wordsArray.clone();
  iv.sigBytes = size;
  iv.clamp();

  wordsArray.words.splice(0, 4); // delete 4 words = 16 bytes
  wordsArray.sigBytes -= size;
  return [iv, wordsArray];
};

export const axiosResponseInterceptor = (response) => {
  response.data = JSON.parse(decrypt(response.data));
  return response;
};

export const axiosRequestInterceptor = (request) => {
  if (request.method !== "get") {
    request.data = encrypt(request.data);
  }
  return request;
};
