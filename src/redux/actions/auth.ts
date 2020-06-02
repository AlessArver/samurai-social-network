export const authActions = {
  setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SN/APP/SET_USER_DATA',
    id, email, login, isAuth
  } as const),
  getCaptchaUrlSuccess: (url: string) => ({type: 'SN/APP/SET_CAPTCHA_URL_SUCCESS', url} as const)
}