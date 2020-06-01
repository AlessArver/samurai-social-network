import { profileApi, ResultCodes, userApi } from '../../api/api'
import { stopSubmit } from 'redux-form'
import { PostType, ProfileType } from '../../types/types'
import { AppStateType, InferActionsTypes } from '../index'
import { profileActions } from '../actions/profile'
import { ThunkAction } from 'redux-thunk'

const initialState = {
  posts: [
    {
      id: 1,
      text: 'My first post',
      likesCount: 100
    },
    {
      id: 2,
      text: 'My second post',
      likesCount: 45634
    }
  ] as Array<PostType>,
  profile: null as null | ProfileType,
  status: ''
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof profileActions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {...state, profile: action.profile}
    case 'ADD_POST':
      return {
        ...state,
        posts: [
          ...state.posts,
          {id: 3, text: action.text, likesCount: 0}
        ]
      }
    case 'DELETE_POST':
      return {...state, posts: state.posts.filter(p => p.id !== action.id)}
    // case 'SAVE_AVATAR_SUCCESS':
    //   return {...state, profile: {...state.profile, ...action.photos}}
    case 'SET_STATUS':
      return {...state, status: action.status}
    default:
      return state
  }
}
export default profileReducer

export const getProfile = (id: number): ThunkType => async dispatch => {
  const data: any = await userApi.getUser(id)
  dispatch(profileActions.setProfile(data))
}
export const getStatus = (id: number): ThunkType => async dispatch => {
  const data = await profileApi.getStatus(id)
  dispatch(profileActions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async dispatch => {
  try {
    const data: any = await profileApi.updateStatus(status)
    if (!data.resultCode) dispatch(profileActions.setStatus(status))
  } catch (e) {
    alert('ERROR')
  }
}
export const saveAvatar = (file: any): ThunkType => async dispatch => {
  const data = await profileApi.saveAvatar(file)
  if (data.resultCode === ResultCodes.Success) dispatch(profileActions.saveAvatarSuccess(data.photos))
}
// stop submit
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const id = getState().auth.id
  const data = await profileApi.saveProfile(profile)
  if (!data.resultCode) dispatch(getProfile(id))
  else {
    let message = data.messages.length ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('profileDataForm', {_error: message}))
    return Promise.reject(message)
  }
}