import React, { FC } from 'react'
import { createField, Input, Textarea } from '../../../common/Forms/Forms'
import { InjectedFormProps, reduxForm } from 'redux-form'
import s from '../../../common/Forms/forms.module.css'
import { GetStringKeys, ProfileType } from '../../../../types/types'

type ProfileDataFormType = {
  profile: ProfileType
}

const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = ({handleSubmit, profile, error}) => (
  <form onSubmit={handleSubmit}>
    <button>Save</button>
    {createField<GetStringKeys<ProfileType>>('fullName', 'Full Name', [], Input)}
    {createField<GetStringKeys<ProfileType>>(
      'lookingForAJob',
      undefined,
      [],
      Input,
      {type: 'checkbox'},
      'Looking for a job')}
    {createField<GetStringKeys<ProfileType>>('aboutMe', 'About me', [], Textarea)}
    {createField<GetStringKeys<ProfileType>>('lookingForAJobDescription', 'My professional skills', [], Textarea)}
    <div>Contacts:</div>
    {Object
      .keys(profile.contacts)
      .map(c => <div key={c}>{createField(`contacts.${c}`, c, [], Input)}</div>)}
    {error && <div className={s.formError}>{error}</div>}
  </form>
)

export default reduxForm<ProfileType, ProfileDataFormType>({form: 'profileDataForm'})(ProfileDataForm)