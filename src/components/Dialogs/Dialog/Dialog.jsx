import {NavLink} from "react-router-dom";
import React from "react";
import * as s from "./Dialog.module.css";

const Dialog = props => {
    return (
            <NavLink to={`/dialogs/${props.id}`} className={s.dialog} activeClassName={s.active}>
                <div className="avatar-wrapper">
                    <img src="https://data.whicdn.com/images/331901362/original.jpg" className="avatar" />
                </div>
                <div className={s.text}>{props.name}</div>
            </NavLink>
    )
}
export default Dialog