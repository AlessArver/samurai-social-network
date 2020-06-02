import { Redirect } from 'react-router-dom'
import React, { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../redux'

type MapStateToPropsForRedirectType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = <WCP, >(Component: ComponentType<WCP>) => {
  const RedirectComponent: FC<MapStateToPropsForRedirectType & {}> = (props) => {
    let {isAuth, ...restProps} = props

    if (!isAuth) return <Redirect to='/login'/>
    return <Component {...restProps as WCP}/> || null
  }

  return connect<MapStateToPropsForRedirectType, {}, WCP, AppStateType>(
    mapStateToPropsForRedirect)
  (RedirectComponent)
}