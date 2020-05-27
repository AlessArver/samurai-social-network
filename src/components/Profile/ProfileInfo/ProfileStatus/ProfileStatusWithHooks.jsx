import React, {useEffect, useState} from "react";
import * as s from "./ProfileStatus.module.css";
import Preloader from "../../../common/Preloader/Preloder";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/Forms/Forms";

const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = e => setStatus(e.currentTarget.value)

    return (
        <>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "No status"}
                    </span>
                </div>
                : <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                />
            }
        </>
    )
}

export default ProfileStatusWithHooks