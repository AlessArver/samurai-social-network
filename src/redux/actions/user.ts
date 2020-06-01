// @ts-ignore
import { UserType } from '../../types/types'

export const userActions = {
  setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
  setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
  setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
  toggleIsFollowSuccess: (id: number) => ({type: 'TOGGLE_IS_FOLLOW', id} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  toggleIsFollowingInProgress: (followingInProgress: boolean, id: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
    followingInProgress, id
  } as const)
}