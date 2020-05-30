import React from 'react'
import { createField, Input, Textarea } from '../../../common/Forms/Forms'
import { required } from '../../../../utils/validators'
import { reduxForm } from 'redux-form'
import s from '../../../common/Forms/forms.module.css'

const Contact = ({ title, value }) => (
  <li>
    <a href={value}>{title}</a>
  </li>
)

const ProfileDataForm = ({ handleSubmit, profile, error }) => (
  <form onSubmit={handleSubmit}>
    <button>Save</button>
    {createField('fullName', 'Full Name', [], Input)}
    {createField(
      'lookingForAJob',
      null,
      [],
      Input,
      { type: 'checkbox' },
      'Looking for a job')}
    {createField('aboutMe', 'About me', [], Textarea)}
    {createField('lookingForAJobDescription', 'My professional skills', [], Textarea)}
    <div>Contacts:</div>
    {Object
      .keys(profile.contacts)
      .map(c => <div key={c}>{createField(`contacts.${c}`, c, [], Input)}</div>)}
    {error && <div className={s.formError}>{error}</div>}
  </form>
)

const ProfileDataFormRedux = reduxForm({ form: 'profileDataForm' })(ProfileDataForm)
export default ProfileDataFormRedux