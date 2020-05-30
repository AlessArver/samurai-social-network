import React, { Component } from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  follow,
  requestUsers,
  setCurrentPage,
  unfollow
} from '../../redux/usersReducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount
} from '../../redux/usersSelectors'
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux'

type OwnPropsType = {
  pageTitle: String
}
type MapStatePropsType = {
  pageSize: number
  currentPage: number
  totalUsersCount: number
  isFetching: boolean
  users: Array<UserType>
  followingInProgress: Array<number>

}
type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersAPIComponent extends Component<PropsType> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (currentPage: number) => {
    const {pageSize} = this.props
    this.props.setCurrentPage(currentPage)
    this.props.requestUsers(currentPage, pageSize)
  }

  render() {
    return <>
      <h2>{this.props.pageTitle}</h2>
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    setCurrentPage,
    requestUsers,
    follow,
    unfollow
  }),
  withAuthRedirect
)(UsersAPIComponent)