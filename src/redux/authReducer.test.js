import React from "react";
import {setAuthUserData} from "./authReducer";

const state = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

// it("userData should be setted", () => {
//     const action = setAuthUserData(1, "lol@gm.co", "Mark", true)
//     const newState = (state, action)
//     expect(newState.id).toBe(1)
// })