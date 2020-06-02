import React, { FC } from 'react'
import * as s from './User.module.css'
import Preloader from '../../common/Preloader/Preloder'
import { NavLink } from 'react-router-dom'
import { UserPropsType } from '../../../types/user'


const User: FC<UserPropsType> = ({user, isFetching, followingInProgress, follow, unfollow}) => {
  return (
    <>
      <NavLink to={`/profile/${user.id}`}>
        <div className='avatar-wrapper'>
          {isFetching
            ? <Preloader/>
            : <img src={user.photos.small
                        || 'https://data.whicdn.com/images/331901362/original.jpg'
            }/>
          }
        </div>
        <div>{user.name}</div>
      </NavLink>
      <div>{user.status}</div>
      {user.followed
        ? <button disabled={followingInProgress.some(id => id === user.id)}
                  onClick={() => unfollow(user.id)}>
          Unfollow
        </button>
        : <button disabled={followingInProgress.some(id => id === user.id)}
                  onClick={() => follow(user.id)}>
          Follow
        </button>
      }
    </>
  )
}
export default User