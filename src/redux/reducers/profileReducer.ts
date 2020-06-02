import { FormAction, stopSubmit } from 'redux-form'
import { PostType, ProfileType } from '../../types/types'
import { InferActionsTypes, ThunkType } from '../index'
import { profileActions } from '../actions/profile'
import { profileApi } from '../../api/profile'
import { ResultCodes } from '../../api'

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
type T = ThunkType<ActionsType | FormAction>


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/PROFILE/SET_PROFILE':
      return {...state, profile: action.profile}
    case 'SN/PROFILE/ADD_POST':
      return {
        ...state,
        posts: [
          ...state.posts,
          {id: 3, text: action.text, likesCount: 0}
        ]
      }
    case 'SN/PROFILE/DELETE_POST':
      return {...state, posts: state.posts.filter(p => p.id !== action.id)}
    case 'SN/APP/SAVE_AVATAR_SUCCESS':
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    case 'SN/PROFILE/SET_STATUS':
      return {...state, status: action.status}
    default:
      return state
  }
}
export default profileReducer

export const getProfile = (id: number): T => async dispatch => {
  const data = await profileApi.getProfile(id)
  dispatch(profileActions.setProfile(data))
}
export const getStatus = (id: number): T => async dispatch => {
  const data = await profileApi.getStatus(id)
  dispatch(profileActions.setStatus(data))
}
export const updateStatus = (status: string): T => async dispatch => {
  try {
    const data = await profileApi.updateStatus(status)
    if (data.resultCode === ResultCodes.Success) dispatch(profileActions.setStatus(status))
  } catch (e) {
    alert('ERROR')
  }
}
export const saveAvatar = (file: File): T => async dispatch => {
  const data = await profileApi.saveAvatar(file)
  if (data.resultCode === ResultCodes.Success)
    dispatch(profileActions.saveAvatarSuccess(data.data.photos))
}
export const saveProfile = (profile: ProfileType): T => async (dispatch, getState) => {
  const id = getState().auth.id
  const data = await profileApi.saveProfile(profile)
  if (data.resultCode === ResultCodes.Success)
    if (id) await dispatch(getProfile(id))
    else throw new Error('userId can\'t be null')
  else {
    let message = data.messages.length ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('profileDataForm', {_error: message}))
    return Promise.reject(message)
  }
}