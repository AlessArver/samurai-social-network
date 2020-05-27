import React from "react"
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import Header from "./Header";

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)