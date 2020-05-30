import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloder'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm/ProfileDataFormm'
import ProfileData from './ProfileData/ProfileData'

const ProfileInfo = ({ profile, isOwner, status, updateStatus, saveProfile, ...props }) => {
  const [edit, setEdit] = useState(false)
  if (!profile) return <Preloader/>

  const onAvatarSelected = e => {
    if (e.target.files.length)
      props.saveAvatar(e.target.files[0])
  }

  const onSubmit = data => saveProfile(data).then(() => setEdit(false))

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
        ? <ProfileData profile={profile} isOwner={isOwner} onAvatarSelected={onAvatarSelected}/>
        : <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
      }
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus}
      />
    </>
  )
}
export default ProfileInfo