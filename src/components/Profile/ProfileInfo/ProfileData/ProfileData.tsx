import s from '../ProfileInfo.module.css'
import React, { FC } from 'react'
import { ContactsType, ProfileType } from '../../../../types/types'

type ContactType = {
  title: string
  value: string
}
const Contact: FC<ContactType> = ({title, value}) => (
  <li>
    <a href={value} target='_blank'>{title}</a>
  </li>
)

type ProfileDataProps = {
  profile: ProfileType
}
const ProfileData: FC<ProfileDataProps> = profile => (
  <div className={s.descriptionBlock}>
    <ul>
      {Object
        .keys(profile.profile.contacts)
        .map(c => <Contact title={c} value={profile.profile.contacts[c as keyof ContactsType]} key={c}/>)}
    </ul>
    <div>
      <div>
        <div>{profile.profile.fullName}</div>
      </div>
      <div>
        <div>About me: {profile.profile.aboutMe || '-'}</div>
      </div>
      <div>
        <div>Looking for a job: {profile.profile.lookingForAJob ? 'yes' : 'no'}</div>
      </div>
      <div>
        <div>My professional skills: {profile.profile.lookingForAJobDescription || '-'}</div>
      </div>
    </div>
  </div>
)
export default ProfileData