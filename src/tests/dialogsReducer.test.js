import React from 'react'
import dialogsReducer, { addMessage, deleteMessage } from '../redux/reducers/dialogsReducer'

const state = {
  messages: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'How are you?' }
  ]
}

it('message should be added in messages', () => {
  const text = 'I\'m fine)'
  const action = addMessage(text)
  const newState = dialogsReducer(state, action)
  expect(newState.messages[2].text).toBe(text)
})
it('message should be removed from messages', () => {
  const action = deleteMessage(2)
  const newState = dialogsReducer(state, action)
  expect(newState.messages.length).toBe(1)
})