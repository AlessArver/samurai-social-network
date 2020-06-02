import React, { FC } from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'
import AddPostReduxForm from './AddPostForm/AddPostForm'
import { AddPostFormType, PostProps } from '../../../types/post'

const Posts: FC<PostProps> = props => {
  const onSubmit = (data: AddPostFormType) => props.addPost(data.post)

  let posts = [...props.posts]
    .map(p => (<Post
        text={p.text}
        likesCount={p.likesCount}
        key={p.id}/>
    ))
    .reverse()

  return (
    <>
      <AddPostReduxForm onSubmit={onSubmit}/>
      <div className={s.posts}>
        {posts}
      </div>
    </>
  )
}
export default React.memo(Posts)