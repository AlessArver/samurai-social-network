import { getAuthUser } from './authReducer'
import { appActions } from '../actions/app'
import { AppStateType, InferActionsTypes } from '../index'
import { ThunkAction } from 'redux-thunk'

const initialState = {
  initialized: false
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof appActions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}
export default appReducer

export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUser())
    .then(() => dispatch(appActions.initializedSuccess()))
}