import React, { FC } from 'react'
import s from './Message.module.css'

type MessageType = {
  text: string
}

const Message: FC<MessageType> = ({text}) => {
  return (
    <div className={s.messageWrapper}>
      <div className={s.message}>{text}</div>
    </div>
  )
}
export default Message