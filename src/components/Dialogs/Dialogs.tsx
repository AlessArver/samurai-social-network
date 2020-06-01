import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { DialogsMapDispatchToProps, DialogsMapStateToProps } from '../../containers/DialogsContainer'
import MessageAddReduxForm, { MessageFormType } from './MessageAddForm'

const Dialogs: FC<DialogsMapStateToProps & DialogsMapDispatchToProps> = props => {
  const onSubmit = (formData: MessageFormType) => {
    props.addMessage(formData.message)
  }

  let dialogs = props.dialogs.map(d => <Dialog id={d.id} name={d.name} key={d.id}/>)
  let messages = props.messages.map(m => <Message text={m.text} key={m.id}/>)

  if (!props.isAuth) return <Redirect to='/login'/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>
        <div className={s.messagesWrapper}>{messages}</div>
        <MessageAddReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}
export default Dialogs

