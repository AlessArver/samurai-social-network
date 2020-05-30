import { profileReducer } from './profileReducer'
import { dialogsReducer } from './dialogsReducer'

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: 'My first post',
          likesCount: 100
        },
        {
          id: 2,
          text: 'My second post',
          likesCount: 45634
        }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Alice' }
      ],
      messages: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' }
      ],
      newMessageText: ''
    }
  },
  _callSubscriber() {
    console.log('update')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}
window.store = store

export default store