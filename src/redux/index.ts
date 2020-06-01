import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/appReducer'

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

export type InferValuesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<InferValuesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// @ts-ignore
window._store = store

export default store