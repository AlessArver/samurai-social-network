import { NavLink } from 'react-router-dom'
import React, { FC } from 'react'
import s from './Dialog.module.css'

type DialogType = {
  id: number
  name: string
}

const Dialog: FC<DialogType> = ({id, name}) => {
  return (
    <NavLink to={`/dialogs/${id}`} className={s.dialog} activeClassName={s.active}>
      <div className='avatar-wrapper'>
        <img src='https://data.whicdn.com/images/331901362/original.jpg' className='avatar'/>
      </div>
      <div className={s.text}>{name}</div>
    </NavLink>
  )
}
export default Dialog