import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// @ts-ignore
window._store = store

export default store