import { PostType } from './types'

export type PostMapStateToProps = {
  posts: Array<PostType>
}
export type PostMapDispatchToProps = {
  addPost: (data: string) => void
}

export type PostProps = PostMapStateToProps & PostMapDispatchToProps

export type AddPostFormType = {
  post: string
}
export type AddPostFormKeys = keyof AddPostFormType