const ADD_MESSAGE = 'ADD-MESSAGE'
const DELETE_MESSAGE = 'DELETE-MESSAGE'

const initialState = {
    dialogs: [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Alice'}
    ],
    messages: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 3, text: action.text}
                ]
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.id)
            }
        default:
            return state
    }
}
export default dialogsReducer

export const addMessage = text => ({type: ADD_MESSAGE, text})
export const deleteMessage = id => ({type: DELETE_MESSAGE, id})