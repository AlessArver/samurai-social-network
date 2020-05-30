import React from 'react'
import * as s from './Post.module.css'

const Post = (props) => (
  <>
    <div className={s.post}>
      <div className="avatar-wrapper">
        <img src="https://data.whicdn.com/images/331901362/original.jpg"/>
      </div>
      <p className={s.postText}>{props.text}</p>
      <div className={s.buttons}>
        <div>like <span>{props.likesCount}</span></div>
      </div>
    </div>
  </>
)
export default Post