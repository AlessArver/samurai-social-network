import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a9b36abe-d689-4dc1-9b92-adeaba26d689'
  }
})

export enum ResultCodes {
  Success = 0,
  Error = 1
}
export enum ResultCodeWithCaptcha {
  CaptchaIsRequired = 10
}

export type ResponseAPI<D = {}, RC = ResultCodes> = {
  data: D
  resultCode: RC
  messages: Array<string>
}