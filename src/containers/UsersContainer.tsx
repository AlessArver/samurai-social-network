import React, { Component, ComponentType } from 'react'
import { connect } from 'react-redux'
import Users from '../components/Users/Users'
import { follow, requestUsers, unfollow } from '../redux/reducers/usersReducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import {
  getUsers, getCurrentPage, getFollowingInProgress,
  getIsFetching, getPageSize, getTotalUsersCount
} from '../selectors/usersSelectors'
import { AppStateType } from '../redux'
import * as U from '../types/user'

class UsersAPIComponent extends Component<U.UserAllProps> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (currentPage: number) => {
    const {pageSize} = this.props
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

const mapStateToProps = (state: AppStateType): U.UserMapStatePropsType => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
})

// <U.UserAllProps, AppStateType>
export default compose<ComponentType>(
  connect(mapStateToProps, {requestUsers, follow, unfollow}),
  withAuthRedirect)(UsersAPIComponent)