import { getAuthUser } from './authReducer'
import { InitialStateType } from '../types/types'

const INITIALIZED_SUCCESS: string = 'INITIALIZED-SUCCESS'

const initialState: InitialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}
export default appReducer

export type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch: any) => {
  dispatch(getAuthUser())
    .then(() => dispatch(initializedSuccess()))
}