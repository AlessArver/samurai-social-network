import { connect } from 'react-redux'
import Posts from '../components/Profile/Posts/Posts'
import { profileActions } from '../redux/actions/profile'
import { AppStateType } from '../redux'
import * as P from '../types/post'

const mapStateToProps = (state: AppStateType) => ({posts: state.profilePage.posts})

export default connect<P.PostMapStateToProps, P.PostMapDispatchToProps, {}, AppStateType>
(mapStateToProps, {addPost: profileActions.addPost})(Posts)