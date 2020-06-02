import { ProfileType } from './types'

export type ProfileInfoProps = {
  profile: ProfileType
  isOwner: boolean
  status: string
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  saveAvatar: (file: File) => void
}