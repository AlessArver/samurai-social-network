import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile, getStatus, saveAvatar, updateStatus, saveProfile } from '../redux/reducers/profileReducer'
import Profile from '../components/Profile/Profile'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../redux'

export type ProfileMapStateToProps = {
  userId: number
  isAuth: boolean
  profile: ProfileType
  status: string
}
export type ProfileMapDispatchToProps = {
  getProfile: (id: number) => void
  getStatus: (id: number) => void
  updateStatus: () => void
  saveAvatar: () => void
  saveProfile: () => void
}
type ProfileType = ProfileMapStateToProps & ProfileMapDispatchToProps

interface ProfileParamsType {
  id?: string | undefined
}

class ProfileContainer extends React.Component<ProfileType & RouteComponentProps<ProfileParamsType>> {
  refreshProfile() {
    let id = this.props.match.params.id
    // if (!id && this.props.isAuth) id = this.props.userId
    // if (!id && !this.props.isAuth) this.props.history.push('/login')
    // this.props.getProfile(id)
    // this.props.getStatus(id)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
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

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    saveAvatar,
    saveProfile
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)