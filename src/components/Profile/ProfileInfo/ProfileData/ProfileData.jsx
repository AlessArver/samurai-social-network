import s from '../ProfileInfo.module.css'
import React from 'react'

const Contact = ({ title, value }) => (
  <li>
    <a href={value} target='_blank'>{title}</a>
  </li>
)

const ProfileData = ({ profile }) => (
  <div className={s.descriptionBlock}>
    <ul>
      {Object
        .keys(profile.contacts)
        .map(c => <Contact title={c} value={profile.contacts[c]} key={c}/>)}
    </ul>
    <div>
      <div>
        <div>{profile.fullName}</div>
      </div>
      <div>
        <div>About me: {profile.aboutMe || '-'}</div>
      </div>
      <div>
        <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
      </div>
      <div>
        <div>My professional skills: {profile.lookingForAJobDescription || '-'}</div>
      </div>
    </div>
  </div>
)
export default ProfileData