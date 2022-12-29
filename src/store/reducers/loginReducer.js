import {  AUTH_GOOGLE_LOGIN_FAILURE, AUTH_GOOGLE_LOGIN_START, AUTH_GOOGLE_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_FAILURE, AUTH_SIGNUP_START, AUTH_SIGNUP_SUCCESS } from "store/constants/loginConstants";

const initialState = {
    loading : false,
    data : {},
    error : ''
}

const authLoginReducer = (state = initialState , action) => {
    
    switch (action.type) {
        case AUTH_LOGIN_START : {
            return {
                ...state,
                loading : true,
            }
        }
        case AUTH_LOGIN_SUCCESS : {
            return {
                ...state,
                data : action.payload.data,
            }
        }
        case AUTH_LOGIN_FAILURE : {
            return {
                ...state,
                error : action.payload
            }
        }
        case AUTH_LOGOUT : {
            return {
                ...state,
                data : action.payload
            }
        }
        case AUTH_GOOGLE_LOGIN_START : {
            return {
                ...state,
                loading : true
            }
        }
        case AUTH_GOOGLE_LOGIN_SUCCESS : {
            return {
                ...state,
                data : action.payload.data
            }
        }
        case AUTH_GOOGLE_LOGIN_FAILURE : {
            return {
                ...state,
                error : action.payload
            }
        }
        case AUTH_SIGNUP_START : {
            return {
                ...state,
                loading : true
            }
        }
        case AUTH_SIGNUP_SUCCESS : {
            return {
                ...state,
                data : action.payload.data
            }
        }
        case AUTH_SIGNUP_FAILURE : {
            return {
                ...state,
                error : action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default authLoginReducer