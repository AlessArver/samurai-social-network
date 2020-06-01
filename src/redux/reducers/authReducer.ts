import { authApi, ResultCodes, ResultCodeWithCaptcha, securityApi } from '../../api/api'
import { stopSubmit } from 'redux-form'
import { AppStateType, InferActionsTypes } from '../index'
import { ThunkAction } from 'redux-thunk'
import { authActions } from '../actions/auth'

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
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth
      }
    case 'SET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        captcha: action.url
      }
    default:
      return state
  }
}
export default authReducer

export const getAuthUser = (): ThunkType => async (dispatch) => {
  const data = await authApi.me()
  if (data.resultCode === ResultCodes.Success) {
    let {id, email, login} = data.data
    dispatch(authActions.setAuthUserData(id, email, login, true))
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
  const captcha = data.url
  dispatch(authActions.getCaptchaUrlSuccess(captcha))
}
export const logout = (): ThunkType => async (dispatch) => {
  const data: any = await authApi.logout()
  if (data.resultCode === ResultCodes.Success)
    dispatch(authActions.setAuthUserData(
      null,
      null,
      null,
      false
    ))
}