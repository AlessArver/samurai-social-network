import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { HeaderProps } from '../../containers/HeaderContainer'

const Header: FC<HeaderProps> = ({isAuth, logout}) => (
  <header className={s.header}>
    <NavLink to='/'>Logo</NavLink>
    {isAuth
      ? <NavLink to='/logout'>
        <button onClick={logout}>Logout</button>
      </NavLink>
      : <NavLink to='/login'>Login</NavLink>
    }
  </header>
)
export default Header