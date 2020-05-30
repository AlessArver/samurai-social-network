import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloder'
import store from './redux'

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const Login = lazy(() => import('./components/Login/Login'))

class App extends React.Component {
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
                <Route path='/users' render={() => <UsersContainer pageTitle='Samurai'/>}/>
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

const mapStateToProps = state => ({ initialized: state.app.initialized })

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)

const MainApp = () => (
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
export default MainApp