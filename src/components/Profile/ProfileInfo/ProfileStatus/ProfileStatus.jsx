import React, {useState} from 'react'
import * as s from './ProfileStatus.module.css'

const ProfileStatus = props => {
    const [edit, setEdit] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEdit = () => setEdit(true)
    const deactivateEdit = () => {
        setEdit(false)
        props.updateStatus(status)
    }

    const onStatusChange = e => setStatus(e.currentTarget.value)

    return (
        <>{!edit
            ? <div>
                    <span onDoubleClick={activateEdit}>
                        {status || 'No status'}
                    </span>
            </div>
            : <input
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={deactivateEdit}
                value={status}
            />
        }
        </>
    )
}
export default ProfileStatus