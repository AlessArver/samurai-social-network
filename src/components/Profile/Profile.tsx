import React, { FC } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from '../../containers/PostsContainer'
import { ProfileType } from '../../types/types'

type ProfileProps = {
  isOwner: boolean
  profile: ProfileType | null
  saveAvatar: (file: File) => void
  status: string
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: FC<ProfileProps> = props => {
  return <>
    <ProfileInfo
      isOwner={props.isOwner}
      profile={props.profile}
      saveAvatar={props.saveAvatar}
      status={props.status}
      updateStatus={props.updateStatus}
      saveProfile={props.saveProfile}
    />
    <PostsContainer/>
  </>
}
export default Profile