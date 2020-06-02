import { createField, Textarea } from '../common/Forms/Forms'
import { required } from '../../utils/validators'
import React, { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import * as D from '../../types/dialog'

const MessageAddForm: FC<InjectedFormProps<D.MessageFormType>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<D.MessageFormKeys>('message', 'Your minds', [required], Textarea)}
    <button>Send</button>
  </form>
)

export default reduxForm<D.MessageFormType>({form: 'dialogs'})(MessageAddForm)