import { profileApi, userApi } from '../api/api'
import { stopSubmit } from 'redux-form'
import { PhotosType, PostType, ProfileType } from '../types/types'

const SET_PROFILE: string = 'SET-PROFILE'
const ADD_POST: string = 'ADD-POST'
const DELETE_POST: string = 'DELETE-POST'
const SET_STATUS: string = 'SET-STATUS'
const UPDATE_NEW_STATUS_TEXT: string = 'UPDATE-NEW-STATUS-TEXT'
const SAVE_AVATAR_SUCCESS: string = 'SAVE-AVATAR-SUCCESS'

const initialState = {
  posts: [
    {
      id: 1,
      text: 'My first post',
      likesCount: 100
    },
    {
      id: '2',
      text: 'My second post',
      likesCount: 45634
    }
  ] as Array<PostType>,
  profile: null as null | Array<ProfileType>,
  status: ''
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_PROFILE:
      return {...state, profile: action.profile}
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {id: 3, text: action.text, likesCount: 0}
        ]
      }
    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id !== action.id)}
    case SAVE_AVATAR_SUCCESS:
      return {...state, profile: {...state.profile, ...action.photos}}
    case SET_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }
}
export default profileReducer

type SetProfileType = {
  type: typeof SET_PROFILE
  profile: ProfileType
}
export const setProfile = (profile: ProfileType): SetProfileType =>
  ({type: SET_PROFILE, profile})
type AddPostType = {
  type: typeof ADD_POST
  text: string
}
export let addPost = (text: string): AddPostType => ({type: ADD_POST, text})
type DeletePostType = {
  type: typeof DELETE_POST
  id: string
}
export let deletePost = (id: string): DeletePostType => ({type: DELETE_POST, id})
type SaveAvatarSuccessType = {
  type: typeof SAVE_AVATAR_SUCCESS
  photos: PhotosType
}
export let saveAvatarSuccess = (photos: PhotosType): SaveAvatarSuccessType =>
  ({type: SAVE_AVATAR_SUCCESS, photos})
type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})

export const getProfile = (id: number) => async (dispatch: any) => {
  const data = await userApi.getUser(id)
  dispatch(setProfile(data))
}
export const getStatus = (id: number) => async (dispatch: any) => {
  const data = await profileApi.getStatus(id)
  dispatch(setStatus(data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const data: any = await profileApi.updateStatus(status)
    if (!data.resultCode) dispatch(setStatus(status))
  } catch (e) {
    alert('ERROR')
  }
}

export const saveAvatar = (file: any) => async (dispatch: any) => {
  const data = await profileApi.saveAvatar(file)
  if (!data.resultCode) dispatch(saveAvatarSuccess(data.photos))
}

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