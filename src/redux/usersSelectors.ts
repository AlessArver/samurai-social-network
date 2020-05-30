import { createSelector } from 'reselect'
import { AppStateType } from './index'

export const getUsers = (state: AppStateType) => state.usersPage.users

// export const getUsersSuper = createSelector(state => getUsers(state).filter(u => true))
// export const getUsersSuperb = createSelector(getUsers, users => {
//   return users.filter(u => true)
// })

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize

export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount

export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage

export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching

export const getFollowingInProgress = (state: AppStateType) =>
  state.usersPage.followingInProgress