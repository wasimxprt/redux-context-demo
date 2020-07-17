
const initialState = {
    isLoggedIn: false,
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }

        case "LOG_OUT":
            return {
                ...state,
                isLoggedIn: false,
                user: {}
            }
        default:
            return state;
    }
}

export default authReducer;