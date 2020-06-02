export type HeaderMapStateToProps = {
  isAuth: boolean
  login: string | null
}
export type HeaderMapDispatchToProps = {
  logout: () => void
}
export type HeaderStoreProps = HeaderMapStateToProps & HeaderMapDispatchToProps