import React, { FC } from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/reducers/authReducer'
import Header from '../components/Header/Header'
import { AppStateType } from '../redux'
import * as H from '../types/header'

const HeaderContainer: FC<H.HeaderStoreProps> = props => <Header {...props} />

const mapStateToProps = (state: AppStateType): H.HeaderMapStateToProps => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)