import { userApi } from '../api/api'
import { UserType } from '../types/types'
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './index'

const SET_CURRENT_PAGE: string = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT: string = 'SET-TOTAL-USERS-COUNT'
const SET_USERS: string = 'SET-USERS'
const TOGGLE_IS_FOLLOW: string = 'TOGGLE-IS-FOLLOW'
const TOGGLE_IS_FETCHING: string = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS: string = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS'

type SetCurrentPageACType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

// AC Types
type SetTotalUsersCountACType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
type ToggleIsFollowSuccessACType = {
  type: typeof TOGGLE_IS_FOLLOW
  id: number
}
type ToggleIsFetchingACType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
type ToggleIsFollowingInProgressACType = {
  type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS
  followingInProgress: boolean
  id: number
}
type ActionsType = SetTotalUsersCountACType | SetCurrentPageACType | SetUsersType | ToggleIsFollowSuccessACType
  | ToggleIsFetchingACType | ToggleIsFollowingInProgressACType

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>
}
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case SET_USERS:
      return {...state, users: action.users}
    case TOGGLE_IS_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id)
            return {...u, followed: !u.followed}
          return u
        })
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }
    default:
      return state
  }
}
export default usersReducer

export const setCurrentPage = (currentPage: number): SetCurrentPageACType =>
  ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountACType => ({
  type: SET_TOTAL_USERS_COUNT, totalUsersCount
})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const toggleIsFollowSuccess = (id: number): ToggleIsFollowSuccessACType =>
  ({type: TOGGLE_IS_FOLLOW, id})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType =>
  ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (
  followingInProgress: boolean,
  id: number
): ToggleIsFollowingInProgressACType => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  followingInProgress, id
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const data = await userApi.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, id: number, apiMethod: any) => {
  dispatch(toggleIsFollowingInProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === 0) dispatch(toggleIsFollowSuccess(id))
  dispatch(toggleIsFollowingInProgress(false, id))
}
export const follow = (id: number): ThunkType => (dispatch) =>
  followUnfollowFlow(dispatch, id, userApi.follow.bind(userApi))
export const unfollow = (id: number): ThunkType => (dispatch) =>
  followUnfollowFlow(dispatch, id, userApi.unfollow.bind(userApi))