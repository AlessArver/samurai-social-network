import React, { FC } from 'react'
import { createField, Input } from '../../common/Forms/Forms'
import { minLength, required } from '../../../utils/validators'
import s from '../../common/Forms/forms.module.css'
import { InjectedFormProps } from 'redux-form'
import { LoginFormProps, LoginOwnProps } from '../Login'

let minLengthEmail = minLength(3)
let minLengthPassword = minLength(8)

type LoginFormPropsKeys = Extract<keyof LoginFormProps, string>

const LoginForm: FC<InjectedFormProps<LoginFormProps, LoginOwnProps> & LoginOwnProps> = ({handleSubmit, error, captcha}) => (
  <form onSubmit={handleSubmit}>
    {createField<LoginFormPropsKeys>('email', 'Email', [required, minLengthEmail], Input)}
    {createField<LoginFormPropsKeys>('password', 'Password',
      [required, minLengthPassword], Input, {type: 'password'})}
    {createField<LoginFormPropsKeys>('rememberMe', undefined, [], Input,
      {type: 'checkbox'}, 'remember me')}
    {captcha && <img src={captcha}/>}
    {captcha && createField<LoginFormPropsKeys>('captcha', 'Enter captcha', [required], Input)}
    {error
     && <div className={s.formError}>{error}</div>
     || <div className={s.formError}>ERROR: {error}</div>}
    <div>
      <button type='submit'>Submit</button>
    </div>
  </form>
)
export default LoginForm