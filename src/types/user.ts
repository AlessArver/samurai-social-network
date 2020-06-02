import { UserType } from './types'

export type UserOwnProps = {
  pageTitle: String
}
export type UserMapStatePropsType = {
  pageSize: number
  currentPage: number
  totalUsersCount: number
  isFetching: boolean
  users: Array<UserType>
  followingInProgress: Array<number>

}
export type UserMapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}

export type UserPropsType = {
  user: UserType
  isFetching: boolean
  followingInProgress: Array<number>
  follow: (id: number) => void
  unfollow: (id: number) => void
}

export type UserAllProps = UserOwnProps & UserMapStatePropsType & UserMapDispatchPropsType