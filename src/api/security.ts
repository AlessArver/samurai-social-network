import { instance } from './index'

type SecurityAPI = {
  url: string
}

export const securityApi = {
  getCaptchaUrl() {
    return instance
      .get<SecurityAPI>(`security/get-captcha-url`)
      .then(res => res.data)
  }
}