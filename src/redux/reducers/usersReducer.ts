import { UserType } from '../../types/types'
import { Dispatch } from 'redux'
import {  InferActionsTypes, ThunkType } from '../index'
import { userActions } from '../actions/user'
import { userApi } from '../../api/user'
import { ResultCodes } from '../../api'

type ActionsType = InferActionsTypes<typeof userActions>
type T = ThunkType<ActionsType>

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>
}
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/USER/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'SN/APP/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case 'SN/USER/SET_USERS':
      return {...state, users: action.users}
    case 'SN/USER/TOGGLE_IS_FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id)
            return {...u, followed: !u.followed}
          return u
        })
      }
    case 'SN/USER/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'SN/USER/TOGGLE_IS_FOLLOWING_IN_PROGRESS':
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

export const requestUsers = (page: number, pageSize: number): T => async (dispatch) => {
  dispatch(userActions.toggleIsFetching(true))
  dispatch(userActions.setCurrentPage(page))
  const data = await userApi.getUsers(page, pageSize)
  dispatch(userActions.toggleIsFetching(false))
  dispatch(userActions.setUsers(data.items))
  dispatch(userActions.setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch: Dispatch, id: number, apiMethod: any) => {
  dispatch(userActions.toggleIsFollowingInProgress(true, id))
  const data = await apiMethod(id)
  if (data.resultCode === ResultCodes.Success) dispatch(userActions.toggleIsFollowSuccess(id))
  dispatch(userActions.toggleIsFollowingInProgress(false, id))
}
export const follow = (id: number): T => (dispatch) =>
  followUnfollowFlow(dispatch, id, userApi.follow.bind(userApi))
export const unfollow = (id: number): T => (dispatch) =>
  followUnfollowFlow(dispatch, id, userApi.unfollow.bind(userApi))