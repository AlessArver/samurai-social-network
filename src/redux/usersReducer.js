import {userApi} from '../api/api';

const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_USERS = 'SET-USERS'
const TOGGLE_IS_FOLLOW = 'TOGGLE-IS-FOLLOW'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS'

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
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
            return {
                ...state,
                users: action.users
            }
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

export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = totalUsersCount => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
})
export const setUsers = users => ({type: SET_USERS, users})
export const toggleIsFollowSuccess = id => ({type: TOGGLE_IS_FOLLOW, id})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (followingInProgress, id) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    followingInProgress, id
})

export const requestUsers = (page, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await userApi.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch, id, apiMethod) => {
    dispatch(toggleIsFollowingInProgress(true, id))
    const data = await apiMethod(id)
    if (data.resultCode === 0) dispatch(toggleIsFollowSuccess(id))
    dispatch(toggleIsFollowingInProgress(false, id))
}
export const follow = id => dispatch =>
    followUnfollowFlow(dispatch, id, userApi.follow.bind(userApi))
export const unfollow = id => dispatch =>
    followUnfollowFlow(dispatch, id, userApi.unfollow.bind(userApi))