import { PhotosType, ProfileType } from '../../types/types'

export const profileActions = {
  setProfile: (profile: ProfileType) => ({type: 'SET_PROFILE', profile} as const),
  addPost: (text: string) => ({type: 'ADD_POST', text} as const),
  deletePost: (id: number) => ({type: 'DELETE_POST', id} as const),
  saveAvatarSuccess: (photos: PhotosType) => ({type: 'SAVE_AVATAR_SUCCESS', photos} as const),
  setStatus: (status: string) => ({type: 'SET_STATUS', status} as const)
}