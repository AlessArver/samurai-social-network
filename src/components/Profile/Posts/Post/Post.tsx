import React, { FC } from 'react'
import s from './Post.module.css'

type PostType = {
  id?: number
  text: string
  likesCount: number
}

const Post: FC<PostType> = ({text, likesCount}) => (
  <>
    <div className={s.post}>
      <div className='avatar-wrapper'>
        <img src='https://data.whicdn.com/images/331901362/original.jpg'/>
      </div>
      <p className={s.postText}>{text}</p>
      <div className={s.buttons}>
        <div>like <span>{likesCount}</span></div>
      </div>
    </div>
  </>
)
export default Post