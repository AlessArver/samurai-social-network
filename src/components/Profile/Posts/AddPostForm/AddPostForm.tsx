import { maxLength, required } from '../../../../utils/validators'
import { InjectedFormProps, reduxForm } from 'redux-form'
import * as s from '../AddPostForm.module.css'
import { createField, Textarea } from '../../../common/Forms/Forms'
import React, { FC } from 'react'
import * as P from '../../../../types/post'
import { GetStringKeys } from '../../../../types/types'

export const maxLengthPost = maxLength(250)

const AddPostForm: FC<InjectedFormProps<P.AddPostFormType>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    {createField<GetStringKeys<P.AddPostFormType>>('post', 'Your minds',
      [required, maxLengthPost], Textarea)}
    <button>Submit</button>
  </form>
)

export default reduxForm<P.AddPostFormType>({form: 'profilePostForm'})(AddPostForm)