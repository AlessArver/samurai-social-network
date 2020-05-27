import React, {useEffect, Suspense, lazy} from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloder'
import store from './redux'

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const Login = lazy(() => import('./components/Login/Login'))

const App = props => {
    useEffect(() => props.initializeApp(), [props.initialized])

    if (props.initialized)
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Suspense>

                </div>
            </div>
        )
    else return <Preloader/>
}

const mapStateToProps = state => ({initialized: state.app.initialized})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)

const MainApp = () => (
    <React.StrictMode>
        <BrowserRouter basename='/samurai-social-network'>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
export default MainApp