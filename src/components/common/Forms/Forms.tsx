import React, { FC, ReactNode } from 'react'
import * as s from './forms.module.css'
import { Field, WrappedFieldProps } from 'redux-form'
import cn from 'classnames'
import { ValidatorType } from '../../../utils/validators'

type FormType = {
  el: string
}

const Form: FC<WrappedFieldProps & FormType> = ({input, meta: {touched, error}, el, ...props}) => {
  const showError = touched && error
  //  className={cn(s.form, {[s.error]: showError})}
  return (
    <div>
      {React.createElement(el, {...input, ...props})}
      {showError && <small>{error}</small>}
    </div>
  )
}

export const Textarea: FC<WrappedFieldProps> = props => <Form {...props} el='textarea'/>
export const Input: FC<WrappedFieldProps> = props => <Form {...props} el='input'/>

export const createField = <KeysType extends string>(name: KeysType,
                                        placeholder: string | undefined,
                                        validators: Array<ValidatorType>,
                                        component: React.FC<WrappedFieldProps>,
                                        props = {}, text = '') =>
  <>
    <Field
      name={name}
      placeholder={placeholder}
      validate={validators}
      component={component}
      {...props}
    /> {text}
  </>