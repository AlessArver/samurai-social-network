import React from "react"
import {NavLink} from "react-router-dom";
import * as s from "./Nav.module.css"

const Nav = () => (
    <nav>
        <div>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
        </div>
        <div>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </div>
        <div>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
    </nav>
)
export default Nav