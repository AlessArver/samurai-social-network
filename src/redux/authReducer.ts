import { authApi, ResultCodes, ResultCodeWithCaptcha, securityApi } from '../api/api'
import { stopSubmit } from 'redux-form'
import { AppStateType } from './index'
import { ThunkAction } from 'redux-thunk'

const SET_USER_DATA: string = 'samurai-network/auth/SET-USER-DATA'
const SET_CAPTCHA_URL_SUCCESS: string = 'samurai-network/auth/SET-CAPTCHA_URL_SUCCESS'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}
export type InitialStateType = typeof initialState

type SetAuthUserDataType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  data: SetAuthUserDataType
}
export type GetCaptchaUrlSuccessType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS
  url: string
}
type ActionsType = SetAuthUserDataActionType | GetCaptchaUrlSuccessType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.url
      }
    default:
      return state
  }
}
export default authReducer

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: {id, email, login, isAuth}
})

export const getCaptchaUrlSuccess = (url: string): GetCaptchaUrlSuccessType => ({type: SET_CAPTCHA_URL_SUCCESS, url})

export const getAuthUser = (): ThunkType => async (dispatch) => {
  const data = await authApi.me()
  if (data.resultCode === ResultCodes.Success) {
    let {id, email, login} = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const data = await authApi.login(email, password, rememberMe, captcha)
  if (data.resultCode === ResultCodes.Success) dispatch(getAuthUser())
  else {
    if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) dispatch(getCaptchaUrl())
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityApi.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = (): ThunkType => async (dispatch) => {
  const data: any = await authApi.logout()
  if (data.resultCode === ResultCodes.Success)
    dispatch(setAuthUserData(
      null,
      null,
      null,
      false
    ))
}