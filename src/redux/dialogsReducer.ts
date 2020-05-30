import { DialogType, MessageType } from '../types/types'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './index'

const ADD_MESSAGE: string = 'ADD-MESSAGE'
const DELETE_MESSAGE: string = 'DELETE-MESSAGE'

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
export type InitialStateType = typeof initialState

type AddMessageType = {
  type: typeof ADD_MESSAGE,
  text: string
}
type DeleteMessageType = {
  type: typeof DELETE_MESSAGE,
  id: string
}
type ActionsType = AddMessageType | DeleteMessageType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export default (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: 3, text: action.text}
        ]
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(m => m.id !== action.id)
      }
    default:
      return state
  }
}

export const addMessage = (text: string): AddMessageType => ({type: ADD_MESSAGE, text})
export const deleteMessage = (id: string): DeleteMessageType => ({type: DELETE_MESSAGE, id})