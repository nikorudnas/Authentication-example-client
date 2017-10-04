// @flow
export default function reducer(state = {
    isFetching: false,
    fetched: false,
    message: null,
    isAuthenticated: false,
    user: null
}, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null,
                    isAuthenticated: false
                }
            }
        case "LOGIN_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload,
                    isAuthenticated: false
                }
            }
        case "LOGIN_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    isAuthenticated: true
                }
            }
        case "REGISTER_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null,
                    isAuthenticated: false
                }
            }
        case "REGISTER_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload,
                    isAuthenticated: false
                }
            }
        case "REGISTER_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    isAuthenticated: true
                }
            }
        case "IDENTIFY_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "IDENTIFY_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: null,
                    isAuthenticated: false
                }
            }
        case "IDENTIFY_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    isAuthenticated: true
                }
            }
        case "LOGOUT":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    isAuthenticated: false
                }
            }
        case "RESETPW_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "RESETPW_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "RESETPW_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: action.payload
                }
            }
        case "APPLYNEWPW_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "APPLYNEWPW_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "APPLYNEWPW_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: action.payload
                }
            }
        default:
            return state;
    }
}