// @ts-ignore
import { UserType } from '../../types/types'

export const userActions = {
  setCurrentPage: (currentPage: number) => ({type: 'SN/USER/SET_CURRENT_PAGE', currentPage} as const),
  setTotalUsersCount: (totalUsersCount: number) => ({type: 'SN/APP/SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
  setUsers: (users: Array<UserType>) => ({type: 'SN/USER/SET_USERS', users} as const),
  toggleIsFollowSuccess: (id: number) => ({type: 'SN/USER/TOGGLE_IS_FOLLOW', id} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USER/TOGGLE_IS_FETCHING', isFetching} as const),
  toggleIsFollowingInProgress: (followingInProgress: boolean, id: number) => ({
    type: 'SN/USER/TOGGLE_IS_FOLLOWING_IN_PROGRESS',
    followingInProgress, id
  } as const)
}