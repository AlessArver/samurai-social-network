import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile, getStatus, saveAvatar, updateStatus, saveProfile } from '../../redux/profileReducer'
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  refreshProfile() {
    let id = this.props.match.params.id
    if (!id && this.props.isAuth) id = this.props.userId
    if (!id && !this.props.isAuth) this.props.history.push('/login')
    this.props.getProfile(id)
    this.props.getStatus(id)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
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
    />
  }
}

const mapStateToProps = state => ({
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