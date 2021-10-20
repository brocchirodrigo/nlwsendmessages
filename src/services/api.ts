import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://messageappnlw.herokuapp.com',
})