// @flow
import constants from '../assets/constants.js';

// Login
export function loginUser(credentials) {
    return dispatch => {
        dispatch(loginRequest());

        return fetch(constants.SERVER_URL + '/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        }).then(response => response.json()).then((responseJson) => {
            // Login successful
            if (responseJson.success) {
                // Add token to local storage
                localStorage.setItem('token', responseJson.token);
                dispatch(loginRequestSuccess());
                return true;
            } else if (!responseJson.success) {
                dispatch(loginRequestError(responseJson));
                return false;
            }
        }).catch((error) => {
            dispatch(loginRequestError({
                message: error.toString()
            }));
        });
    }
}

function loginRequest() {
    return {
        type: "LOGIN_REQUEST"
    }
}

function loginRequestError(data) {
    return {
        type: "LOGIN_REQUEST_FAILURE",
        payload: data.message
    }
}

function loginRequestSuccess() {
    return {
        type: "LOGIN_REQUEST_SUCCESS"
    }
}

// Register
export function registerUser(credentials) {
    return dispatch => {
        dispatch(registerRequest());

        return fetch(constants.SERVER_URL + '/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: credentials.username,
                email: credentials.email,
                password: credentials.password
            })
        }).then(response => response.json()).then((responseJson) => {
            // Register successful
            if (responseJson.success) {
                // Login user
                localStorage.setItem('token', responseJson.token);
                dispatch(registerRequestSuccess());
                return true;
            } else if (!responseJson.success) {
                dispatch(registerRequestError(responseJson));
                return false;
            }
        }).catch((error) => {
            dispatch(registerRequestError({
                message: error.toString()
            }));
        });
    }
}

export function registerError(error) {
    return dispatch => {
        dispatch(registerRequestError(error));
    }
}


function registerRequest() {
    return {
        type: "REGISTER_REQUEST"
    }
}

function registerRequestError(data) {
    return {
        type: "REGISTER_REQUEST_FAILURE",
        payload: data.message
    }
}

function registerRequestSuccess() {
    return {
        type: "REGISTER_REQUEST_SUCCESS"
    }
}

export function indetifyUser(token) {
    return dispatch => {
        dispatch(identifyRequest());

        return fetch(constants.SERVER_URL + '/api/validatejwt', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token
            })
        }).then(response => response.json()).then((responseJson) => {
            // Register successful
            if (responseJson.success) {
                // Valid jwt
                dispatch(identifyRequestSuccess());
                return true;
            } else if (!responseJson.success) {
                dispatch(identifyRequestError(responseJson));
                return false;
            }
        }).catch((error) => {
            dispatch(identifyRequestError({
                message: error.toString()
            }));
        });
    }
}

function identifyRequest() {
    return {
        type: "IDENTIFY_REQUEST"
    }
}

function identifyRequestError(data) {
    return {
        type: "IDENTIFY_REQUEST_FAILURE",
        payload: data.message
    }
}

function identifyRequestSuccess() {
    return {
        type: "IDENTIFY_REQUEST_SUCCESS"
    }
}


// Logout
export function logoutUser() {
    return dispatch => {

        // Remove token from storage
        localStorage.removeItem('token');

        dispatch(logout());
    }
}

function logout() {
    return {
        type: "LOGOUT"
    }
}


export function resetPW(creds) {
    return dispatch => {
        dispatch(resetPWRequest());

        return fetch(constants.SERVER_URL + '/api/resetpw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                creds
            })
        }).then(response => response.json()).then((responseJson) => {
            // Register successful
            if (responseJson.success) {
                // Valid jwt
                dispatch(resetPWRequestSuccess(responseJson));
                return true;
            } else if (!responseJson.success) {
                dispatch(resetPWRequestError(responseJson));
                return false;
            }
        }).catch((error) => {
            dispatch(resetPWRequestError({
                message: error.toString()
            }));
        });
    }
}

function resetPWRequest() {
    return {
        type: "RESETPW_REQUEST"
    }
}

function resetPWRequestError(data) {
    return {
        type: "RESETPW_REQUEST_FAILURE",
        payload: data.message
    }
}

function resetPWRequestSuccess(data) {
    return {
        type: "RESETPW_REQUEST_SUCCESS",
        payload: data.message
    }
}

export function applyNewPW(creds) {
    console.log(creds);
    return dispatch => {
        dispatch(applyNewPWRequest());

        return fetch(constants.SERVER_URL + '/api/confirmpw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                creds
            })
        }).then(response => response.json()).then((responseJson) => {
            // Register successful
            if (responseJson.success) {
                // Valid jwt
                dispatch(applyNewPWRequestSuccess(responseJson));
                return true;
            } else if (!responseJson.success) {
                dispatch(applyNewPWRequestError(responseJson));
                return false;
            }
        }).catch((error) => {
            dispatch(applyNewPWRequestError({
                message: error.toString()
            }));
        });
    }
}

function applyNewPWRequest() {
    return {
        type: "APPLYNEWPW_REQUEST"
    }
}

function applyNewPWRequestError(data) {
    return {
        type: "APPLYNEWPW_REQUEST_FAILURE",
        payload: data.message
    }
}

function applyNewPWRequestSuccess(data) {
    return {
        type: "APPLYNEWPW_REQUEST_SUCCESS",
        payload: data.message
    }
}