import React, { Suspense, lazy, Component, FC, ComponentType } from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import Nav from './components/Nav/Nav'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/reducers/appReducer'
import Preloader from './components/common/Preloader/Preloder'
import store, { AppStateType } from './redux'
import * as A from './types/app'

//const FunComponent = (lazy(() => (import('./FunComponent'))))
const DialogsContainer = lazy(() => import('./containers/DialogsContainer'))
const ProfileContainer = lazy(() => import('./containers/ProfileContainer'))
const UsersContainer = lazy(() => import('./containers/UsersContainer'))
const Login = lazy(() => import('./components/Login/Login'))

class App extends Component<A.AppStoreProps> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (this.props.initialized)
      return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader/>}>
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='*' render={() => <div>404 Not Found</div>}/>
              </Switch>
            </Suspense>
          </div>
        </div>
      )
    else return <Preloader/>
  }
}

const mapStateToProps = (state: AppStateType): A.AppMapStateToProps =>
  ({initialized: state.app.initialized})

const AppContainer = compose<ComponentType>(
  connect(mapStateToProps, {initializeApp}),
  withRouter)(App)

const MainApp: FC = () => (
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
export default MainApp