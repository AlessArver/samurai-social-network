import { DialogType, MessageType } from '../../types/types'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes, ThunkType } from '../index'
import { dialogActions } from '../actions/dialog'

const initialState = {
  dialogs: [
    {id: 1, name: 'Mark'},
    {id: 2, name: 'Alice'}
  ] as Array<DialogType>,
  messages: [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How are you?'}
  ] as Array<MessageType>
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof dialogActions>
type T = ThunkType<ActionsType>

export default (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/ADD_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: 3, text: action.text}
        ]
      }
    case 'SN/DIALOGS/DELETE_MESSAGE':
      return {
        ...state,
        messages: state.messages.filter(m => m.id !== action.id)
      }
    default:
      return state
  }
}