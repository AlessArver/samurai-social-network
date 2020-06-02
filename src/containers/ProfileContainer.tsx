import React, { ComponentType } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile, getStatus, saveAvatar, updateStatus, saveProfile } from '../redux/reducers/profileReducer'
import Profile from '../components/Profile/Profile'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../redux'
import { ProfileType } from '../types/types'

type ProfileMapStateToProps = ReturnType<typeof mapStateToProps>
export type ProfileMapDispatchToProps = {
  getProfile: (id: number) => void
  getStatus: (id: number) => void
  updateStatus: (status: string) => void
  saveAvatar: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}
type ProfileTyp = ProfileMapStateToProps & ProfileMapDispatchToProps

interface ProfileParamsType {
  id: string
}

type PropsType = ProfileTyp & RouteComponentProps<ProfileParamsType>

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let id: number | null = +this.props.match.params.id
    if (!id && this.props.isAuth) id = this.props.userId
    if (!id && !this.props.isAuth) this.props.history.push('/')
    this.props.getProfile(id as number)
    this.props.getStatus(id as number)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.id !== prevProps.match.params.id)
      this.refreshProfile()
  }

  render() {
    return <Profile
      {...this.props}
      isOwner={!this.props.match.params.id}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      saveAvatar={this.props.saveAvatar}
      saveProfile={this.props.saveProfile}
    />
  }
}

const mapStateToProps = (state: AppStateType) => ({
  userId: state.auth.id,
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose<ComponentType>(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    saveAvatar,
    saveProfile
  }), withRouter)(ProfileContainer)