import axios from 'axios';

const baseRequest = {
  method: '',
  url: '',
  responseType: 'json',
  data: {}
}
const service = axios.create({
  headers: {}
})

export const makeGet = (url) => service.get(url)
export const makePost = (url, payload) => service.post({
  ...baseRequest,
  method: 'POST',
  url,
  data: payload
})