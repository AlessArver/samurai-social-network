import { FormAction, stopSubmit } from 'redux-form'
import { InferActionsTypes, ThunkType } from '../index'
import { authActions } from '../actions/auth'
import { authApi } from '../../api/auth'
import { securityApi } from '../../api/security'
import { ResultCodes, ResultCodeWithCaptcha } from '../../api'

type initialStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captcha: string | null
}
const initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null
}

type ActionsType = InferActionsTypes<typeof authActions>
type T = ThunkType<ActionsType | FormAction>

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SN/APP/SET_USER_DATA':
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth
      }
    case 'SN/APP/SET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        captcha: action.url
      }
    default:
      return state
  }
}
export default authReducer

export const getAuthUser = (): T => async (dispatch) => {
  const data = await authApi.me()
  if (data.resultCode === ResultCodes.Success) {
    let {id, email, login} = data.data
    dispatch(authActions.setAuthUserData(id, email, login, true))
  }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): T => async (dispatch) => {
  const data = await authApi.login(email, password, rememberMe, captcha)
  if (data.resultCode === ResultCodes.Success)
    await dispatch(getAuthUser())
  else {
    if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired)
      await dispatch(getCaptchaUrl())
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const getCaptchaUrl = (): T => async (dispatch) => {
  const data = await securityApi.getCaptchaUrl()
  const captcha = data.url
  dispatch(authActions.getCaptchaUrlSuccess(captcha))
}
export const logout = (): T => async (dispatch) => {
  const data: any = await authApi.logout()
  if (data.resultCode === ResultCodes.Success)
    dispatch(authActions.setAuthUserData(
      null,
      null,
      null,
      false
    ))
}