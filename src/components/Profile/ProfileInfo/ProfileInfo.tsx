import React, { ChangeEvent, FC, useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloder'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileDataForm from './ProfileDataForm/ProfileDataFormm'
import ProfileData from './ProfileData/ProfileData'
import { ProfileType } from '../../../types/types'

type Props = {
  isOwner: boolean
  profile: ProfileType | null
  saveAvatar: (file: File) => void
  status: string
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: FC<Props> = ({
                                  profile, isOwner, status,
                                  updateStatus, saveProfile, saveAvatar
                                }) => {
  const [edit, setEdit] = useState(false)
  if (!profile) return <Preloader/>

  const onAvatarSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length)
      saveAvatar(e.target.files[0])
  }

  const onSubmit = (data: ProfileType) => saveProfile(data).then(() => setEdit(false))

  return (
    <>
      <div className={s.bigImageWrapper}>
        <img src={
          profile.photos.large
          || 'https://cdn2.hubspot.net/hubfs/2221797/cumulus2.jpg'
        } alt='big image'/>
      </div>
      <img src={
        profile.photos.small
        || 'https://data.whicdn.com/images/331901362/original.jpg'
      } className={s.smallImage}/>
      <div className={s.buttonsGroup}>
        {isOwner && <button onClick={() => setEdit(true)} className={s.buttonGroupItem}>Edit</button>}
        {isOwner && <input type='file' onChange={onAvatarSelected} className={s.buttonGroupItem}/>}
      </div>
      {!edit
        ? <ProfileData profile={profile}/>
        : <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
      }
      <ProfileStatus
        status={status}
        updateStatus={updateStatus}
      />
    </>
  )
}
export default ProfileInfo