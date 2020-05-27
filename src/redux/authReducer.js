import {authApi} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
export default authReducer

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})

export const getAuthUser = () => async dispatch => {
    const data = await authApi.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async dispatch => {
    const data = await authApi.login(email, password, rememberMe)
    if (data.resultCode === 0) dispatch(getAuthUser())
    else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async dispatch => {
    const data = await authApi.logout()
    if (data.resultCode === 0)
        dispatch(setAuthUserData(
            null,
            null,
            null,
            false
        ))
}