import React from "react"
import * as s from "./Posts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import Post from "./Post/Post";
import {Textarea} from "../../common/Forms/Forms";

const maxLengthPost = maxLength(250)

const PostForm = props => (
    <form onSubmit={props.handleSubmit}>
        <Field
            name="post"
            className={s.newPost}
            placeholder="Your minds"
            validate={[required, maxLengthPost]}
            component={Textarea}
        />
        <button>Submit</button>
    </form>
)

const PostReduxForm = reduxForm({form: "profilePost"})(PostForm)

const Posts = React.memo(props => {
    const onSubmit = (formData) => {
        props.addPost(formData.post)
    }

    let posts = [...props.posts]
        .map(p => (<Post
                text={p.text}
                likesCount={p.likesCount}
                key={p.id}/>
        ))
        .reverse()

    return (
        <>
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {posts}
            </div>
        </>
    )
});
export default Posts