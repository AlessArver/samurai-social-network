import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = props => {
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