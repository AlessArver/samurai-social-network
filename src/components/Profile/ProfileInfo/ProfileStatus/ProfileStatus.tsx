import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import * as s from './ProfileStatus.module.css'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatus: FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState<boolean>(false)
  let [status, setStatus] = useState<string>(props.status)


  useEffect(() => setStatus(props.status), [props.status])

  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

  return (
    <>
      Status:
      {!editMode
        ? <div>
            <span onDoubleClick={activateEditMode}>
               {props.status || 'No status'}
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

export default ProfileStatus