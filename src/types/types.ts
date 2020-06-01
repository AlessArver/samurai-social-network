import { ResultCodes, ResultCodeWithCaptcha } from '../api/api'

export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  text: string
}

export type PostType = {
  id: number
  text: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string | null
    large: string | null
  }
  followed: boolean
}

export type AuthMeAPI = {
  data: {
    id: number,
    email: string,
    login: string
  }
  resultCode: ResultCodes
  messages: Array<string>
}
export type AuthLoginAPI = {
  data: {
    userId: number
  }
  resultCode: ResultCodes | ResultCodeWithCaptcha
  messages: Array<string>
}
export type AuthLogoutAPI = {
  resultCode: ResultCodes
}

export type SecurityAPI = {
  url: string
}

export type ProfileGetStatusAPI = {
  status: string
}
export type ProfileUpdateStatusAPI = {
  resultCode: ResultCodes
  messages: Array<string>
  data: any
}
export type ProfileGet = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}
export type ProfileSaveAvatar = {
  data: {
    photos: PhotosType
    resultCode: ResultCodes
  }
  messages: Array<string>
}
export type ProfileUpdate = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  resultCode: ResultCodes
  messages: Array<string>
}

export type UsersGet = {
  items: Array<UserType>
  totalCount: number
  error: string
}
export type UserFollow = {
  resultCode: ResultCodes
  messages: Array<string>
  data: any
}
export type UserUnfollow = {
  resultCode: ResultCodes
  messages: Array<string>
  data: any
}