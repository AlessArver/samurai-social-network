import React from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
  const onSubmit = data => props.login(data.email, data.password, data.rememberMe)

  if (props.isAuth) return <Redirect to='/profile'/>

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {
  login, logout
})(Login)