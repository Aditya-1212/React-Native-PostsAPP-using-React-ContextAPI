import createDataContext  from './createDataContext';

// actions
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POSTS = 'GET_POSTS'

const intialState = []

// Reducer
const postReducer = (state = intialState, action) =>{
   // console.log(state)
    switch(action.type){
        case ADD_POST:
            return [...state, action.payload]
        
        case DELETE_POST:
            return state.filter( post => post.id !== action.payload)

        default:
            return state
    }
}

// dispatch functions
const addpost = dispatch => async(post) => {
    dispatch({type: ADD_POST, payload: post})
}

const deletepost = dispatch => async(id) => {
    dispatch({type: DELETE_POST, payload: id})
}

export const {Provider, Context} = createDataContext(
    postReducer, {addpost, deletepost}, []
)