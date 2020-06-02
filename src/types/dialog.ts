import { DialogType, MessageType } from './types'

export type DialogsMapStateToProps = {
  isAuth: boolean
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
export type DialogsMapDispatchToProps = {
  addMessage: (message: string) => void
}

export type MessageFormType = {
  message: string
}
export type MessageFormKeys = Extract<keyof MessageFormType, string>