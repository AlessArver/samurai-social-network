import { createField, Textarea } from '../common/Forms/Forms'
import { required } from '../../utils/validators'
import React, { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

export type MessageFormType = {
  message: string
}
type MessageFormKeysType = Extract<keyof MessageFormType, string>

const MessageAddForm: FC<InjectedFormProps<MessageFormType>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<MessageFormKeysType>('message', 'Your minds', [required], Textarea)}
    <button>Send</button>
  </form>
)

const MessageAddReduxForm = reduxForm<MessageFormType>({form: 'dialogs'})(MessageAddForm)
export default MessageAddReduxForm