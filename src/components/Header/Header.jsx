import React from "react"
import {NavLink} from "react-router-dom";
import * as s from "./Header.module.css"

const Header = props => (
    <header className={s.header}>
        <a href="#">Logo</a>
        {props.isAuth
            ? <NavLink to="/logout">
                <button onClick={props.logout}>Logout</button>
            </NavLink>
            : <NavLink to="/login">Login</NavLink>
        }
    </header>
)
export default Header