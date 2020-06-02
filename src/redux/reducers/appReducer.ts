import { getAuthUser } from './authReducer'
import { appActions } from '../actions/app'
import { InferActionsTypes, ThunkType } from '../index'

const initialState = {
  initialized: false
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof appActions>
type T = ThunkType<ActionsType>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
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