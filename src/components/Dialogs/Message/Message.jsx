import React from 'react'
import * as s from './Message.module.css'

const Message = props => {
  return (
    <div className={s.messageWrapper}>
      <div className={s.message}>{props.text}</div>
    </div>
  )
}
export default Message