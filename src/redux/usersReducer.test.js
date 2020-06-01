import React from 'react'
import usersReducer, {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowingInProgress,
  toggleIsFollowSuccess
} from './reducers/usersReducer'

const state = {
  users: [
    { id: 1, name: 'Mark', age: 19, followed: false },
    { id: 2, name: 'Alicia', age: 19, followed: false },
    { id: 3, name: 'Maria', age: 25, followed: false },
    { id: 4, name: 'Naruto', age: 40, followed: false }
  ],
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

it('current page value should be correct', () => {
  const count = 5
  const action = setCurrentPage(count)
  const newState = usersReducer(state, action)
  expect(newState.currentPage).toBe(count)
})

it('total users count value should be correct', () => {
  const count = 10000
  const action = setTotalUsersCount(count)
  const newState = usersReducer(state, action)
  expect(newState.totalUsersCount).toBe(count)
})
it('users should be set users', () => {
  const users = [
    { id: 1, name: 'Mark', age: 19, follow: false },
    { id: 2, name: 'Alicia', age: 19, follow: false }
  ]
  const action = setUsers(users)
  const newState = usersReducer(state, action)
  expect(newState.users).toBe(users)
})

it('probably friend id should be correct', () => {
  const action = toggleIsFollowSuccess(2)
  const newState = usersReducer(state, action)
  expect(newState.users[1].id).toBe(2)
})
it('user follow should be toggled', () => {
  const action = toggleIsFollowSuccess(2)
  const newState = usersReducer(state, action)
  expect(newState.users[1].followed).toBe(true)
})

it('user should be added in followingInProgress', () => {
  const action = toggleIsFollowingInProgress(true, 3)
  const newState = usersReducer(state, action)
  expect(newState.followingInProgress[0]).toBe(3)
})