import React, { FC } from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/reducers/authReducer'
import Header from '../components/Header/Header'
import { AppStateType } from '../redux'

type HeaderMapStateToProps = {
  isAuth: boolean
  login: string | null
}
type HeaderMapDispatchToProps = {
  logout: () => void
}
export type HeaderProps = HeaderMapStateToProps & HeaderMapDispatchToProps

const HeaderContainer: FC<HeaderProps> = props => <Header {...props} />

const mapStateToProps = (state: AppStateType): HeaderMapStateToProps => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)