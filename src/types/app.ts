export type AppMapStateToProps = {
  initialized: boolean
}
export type AppMapDispatchToProps = {
  initializeApp: () => void
}
export type AppStoreProps = AppMapStateToProps & AppMapDispatchToProps