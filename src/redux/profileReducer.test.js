import React from 'react'
import profileReducer, { addPost, deletePost, setStatus } from './reducers/profileReducer'

const state = {
  posts: [
    { id: 1, text: 'My first post', likesCount: 100 },
    { id: 2, text: 'My second post', likesCount: 45634 }
  ],
  status: ''
}


it('length of posts should be incremented', () => {
  const action = addPost('new post')
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
})
it('message of new post should be corrected', () => {
  const text = 'new post'
  const action = addPost(text)
  const newState = profileReducer(state, action)
  expect(newState.posts[2].text).toBe(text)
})

it('length of messages should be decremented after deleting', () => {
  const action = deletePost(1)
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(1)
})
it('length of messages shouldn\'t be decremented if id is incorrect', () => {
  const action = deletePost(5)
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(1)
})

it('status should be corrected', () => {
  const text = 'set status'
  const action = setStatus(text)
  const newState = profileReducer(state, action)
  expect(newState.status).toBe(text)
})