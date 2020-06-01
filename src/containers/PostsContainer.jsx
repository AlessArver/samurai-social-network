import { connect } from 'react-redux'
import Posts from '../components/Profile/Posts/Posts'
import { profileActions } from '../redux/actions/profile'

const mapStateToProps = state => ({
  posts: state.profilePage.posts
})

const PostsContainer = connect(mapStateToProps, {
  addPost: profileActions.addPost
})(Posts)
export default PostsContainer