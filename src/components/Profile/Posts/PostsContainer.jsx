import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";
import Posts from "./Posts";

const mapStateToProps = state => ({
    posts: state.profilePage.posts
})

const PostsContainer = connect(mapStateToProps, {addPost})(Posts)
export default PostsContainer