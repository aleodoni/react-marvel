import axios from 'axios';
import crypto from 'crypto';

const toHash = `1${process.env.REACT_APP_API_PRIVATE_KEY}${process.env.REACT_APP_API_PUBLIC_KEY}`;

const hash = crypto
  .createHash('md5')
  .update(toHash)
  .digest('hex');

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.params = {};
api.defaults.params.ts = 1;
api.defaults.params.apikey = process.env.REACT_APP_API_PUBLIC_KEY;
api.defaults.params.hash = hash;

export default api;
