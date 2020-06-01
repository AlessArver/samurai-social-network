import React, { FC } from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/authReducer'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux'

const LoginReduxForm = reduxForm<LoginFormProps, LoginOwnProps>({form: 'login'})(LoginForm)

export type LoginFormProps = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

export type LoginOwnProps = {
  captcha: string | null
}

type MapStatePropsType = {
  isAuth: boolean
  captcha: string | null
}
type MapDispatchPropsType = {
  login: (email: string, password: string,rememberMe: boolean, captcha: string | null) => void
}

const Login: FC<MapStatePropsType & MapDispatchPropsType> = props => {
  const onSubmit = (data: LoginFormProps) =>
    props.login(data.email, data.password, data.rememberMe, data.captcha)

  if (props.isAuth) return <Redirect to='/profile'/>

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </>
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha
})

// @ts-ignore
export default connect(mapStateToProps, {login})(Login)