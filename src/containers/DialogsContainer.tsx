import { connect } from 'react-redux'
import Dialogs from '../components/Dialogs/Dialogs'
import React, { ComponentType } from 'react'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../redux'
import { dialogActions } from '../redux/actions/dialog'
import { DialogsMapStateToProps } from '../types/dialog'

const mapStateToProps = (state: AppStateType): DialogsMapStateToProps => ({
  isAuth: state.auth.isAuth,
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages
})

export default compose<ComponentType>(
  connect(mapStateToProps, {
    addMessage: dialogActions.addMessage
  }), withAuthRedirect)(Dialogs)