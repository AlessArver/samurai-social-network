import React from 'react';
import {createField, Input} from '../../common/Forms/Forms';
import {minLength, required} from '../../../utils/validators';
import s from '../../common/Forms/forms.module.css'

let minLengthEmail = minLength(3)
let minLengthPassword = minLength(8)

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email', 'Email', [required, minLengthEmail], Input)}
        {createField('password', 'Password',
            [required, minLengthPassword], Input, {type: 'password'})}
        {createField('rememberMe', null, [], Input,
            {type: 'checkbox'}, 'remember me')}
        {error && <div className={s.formError}>{error}</div>}
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
}
export default LoginForm