import { connect } from 'react-redux'
import Dialogs from '../components/Dialogs/Dialogs'
import React from 'react'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'
import { DialogType, MessageType } from '../types/types'
import { AppStateType } from '../redux'
import { dialogActions } from '../redux/actions/dialog'

export type DialogsMapStateToProps = {
  isAuth: boolean
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
export type DialogsMapDispatchToProps = {
  addMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): DialogsMapStateToProps => ({
  isAuth: state.auth.isAuth,
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages
})

export default compose(
  connect(mapStateToProps, {
    addMessage: dialogActions.addMessage
  }),
  withAuthRedirect
)(Dialogs)