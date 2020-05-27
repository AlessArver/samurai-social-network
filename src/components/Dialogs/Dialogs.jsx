import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import * as s from "./Dialogs.module.css"
import {required} from "../../utils/validators";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Textarea} from "../common/Forms/Forms";

const MessageForm = props => (
    <form onSubmit={props.handleSubmit}>
        <Field
            name="message"
            placeholder="Your minds"
            validate={[required]}
            component={Textarea}
        />
        <button>Send</button>
    </form>
)

const MessageReduxForm = reduxForm({form: "dialogs"})(MessageForm)

const Dialogs = props => {
    const onSubmit = (formData) => {
        props.addMessage(formData.message)
    }

    let dialogs = props.dialogs.map(d => <Dialog key={d.id} name={d.name}/>)
    let messages = props.messages.map(m => <Message key={m.id} text={m.text}/>)

    if (!props.isAuth) return <Redirect to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.messages}>
                <div className={s.messagesWrapper}>{messages}</div>
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
export default Dialogs

