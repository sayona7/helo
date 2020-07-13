const initialState = {
    username: "",
    id: "",
    profilePicture: ""
}

const GET_USER = "GET_USER";
const CLEAR_USER = "CLEAR_USER";

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}


export default function reducer(state = initialState, action) {
    switch(action) {
        default:
            return state;
    }
}