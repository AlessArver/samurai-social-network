import {profileApi, userApi} from '../api/api';

const SET_PROFILE = 'SET-PROFILE'
const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_STATUS = 'SET-STATUS'
const UPDATE_NEW_STATUS_TEXT = 'UPDATE-NEW-STATUS-TEXT'

const initialState = {
    posts: [
        {
            id: 1,
            text: 'My first post',
            likesCount: 100
        },
        {
            id: 2,
            text: 'My second post',
            likesCount: 45634
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 3,
                        text: action.text,
                        likesCount: 0
                    }
                ]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}
export default profileReducer

export const setProfile = profile => ({type: SET_PROFILE, profile})
export let addPost = text => ({type: ADD_POST, text})
export let deletePost = id => ({type: DELETE_POST, id})

export const setStatus = status => ({type: SET_STATUS, status})

export const getProfile = id => async dispatch => {
    const data = await userApi.getUser(id)
    dispatch(setProfile(data))
}
export const getStatus = id => async dispatch => {
    const data = await profileApi.getStatus(id)
    dispatch(setStatus(data))
}
export const updateStatus = status => async dispatch => {
    const data = await profileApi.updateStatus(status)
    if (!data.resultCode) dispatch(setStatus(status))
}
