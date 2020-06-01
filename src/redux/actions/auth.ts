export const authActions = {
  setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    id, email, login, isAuth
  } as const),
  getCaptchaUrlSuccess: (url: string) => ({type: 'SET_CAPTCHA_URL_SUCCESS', url} as const)
}