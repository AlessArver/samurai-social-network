import axios from 'axios'
import {
  AuthMeAPI,
  AuthLoginAPI,
  ProfileType,
  AuthLogoutAPI,
  SecurityAPI,
  ProfileGetStatusAPI,
  ProfileUpdateStatusAPI, ProfileGet, ProfileSaveAvatar, ProfileUpdate, UsersGet, UserFollow, UserUnfollow
} from '../types/types'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a9b36abe-d689-4dc1-9b92-adeaba26d689'
  }
})

export enum ResultCodes {
  Success = 0,
  Error = 1
}
export enum ResultCodeWithCaptcha {
  CaptchaIsRequired = 10
}

export const userApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersGet>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  getUser(id: number) {
    console.warn('Please use profileApi')
    return profileApi.getProfile(id)
  },
  follow(id: number) {
    return instance
      .post<UserFollow>(`follow/${id}`)
      .then(res => res.data)
  },
  unfollow(id: number) {
    return instance
      .delete<UserUnfollow>(`unfollow/${id}`)
      .then(res => res.data)
  }
}

export const profileApi = {
  getProfile(id: number) {
    return instance
      .get<ProfileGet>(`profile/${id}`)
      .then(res => res.data)
  },
  getStatus(id: number) {
    return instance
      .get<ProfileGetStatusAPI>(`profile/status/${id}`)
      .then(res => res.data)
  },
  updateStatus(status: string) {
    return instance
      .put<ProfileUpdateStatusAPI>(`profile/status`, {status})
  },
  saveAvatar(file: any) {
    const formData = new FormData()
    formData.append('image', file)
    return instance
      .put<ProfileSaveAvatar>('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => res.data)
      .then(res => res.data)
  },
  saveProfile(profile: ProfileType) {
    return instance
      .put<ProfileUpdate>(`profile`, profile)
      .then(res => res.data)
  }
}

export const authApi = {
  me() {
    return instance
      .get<AuthMeAPI>(`auth/me`)
      .then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post<AuthLoginAPI>('auth/login', {email, password, rememberMe, captcha})
      .then(res => res.data)
  },
  logout() {
    return instance.delete<AuthLogoutAPI>('auth/login')
  }
}

export const securityApi = {
  getCaptchaUrl() {
    return instance
      .get<SecurityAPI>(`security/get-captcha-url`)
      .then(res => res.data)
  }
}