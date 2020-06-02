import { PhotosType, ProfileType } from '../../types/types'

export const profileActions = {
  setProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_PROFILE', profile} as const),
  addPost: (text: string) => ({type: 'SN/PROFILE/ADD_POST', text} as const),
  deletePost: (id: number) => ({type: 'SN/PROFILE/DELETE_POST', id} as const),
  saveAvatarSuccess: (photos: PhotosType) => ({type: 'SN/APP/SAVE_AVATAR_SUCCESS', photos} as const),
  setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const)
}