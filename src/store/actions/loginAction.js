import axios from "axios"
import { AUTH_LOGIN_START,AUTH_LOGIN_FAILURE,AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_GOOGLE_LOGIN_START, AUTH_GOOGLE_LOGIN_SUCCESS, AUTH_GOOGLE_LOGIN_FAILURE, AUTH_SIGNUP_START, AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_FAILURE } from "store/constants/loginConstants"

const loginStart = () => {
    return {
        type : AUTH_LOGIN_START,
    }
}
const loginSuccess = (data) => {
    console.log(data,'dataaaaaaaaaaaaaaa')
    return {
        type : AUTH_LOGIN_SUCCESS,
        payload : data
    }
}
const loginfailure = (err) => {
    return {
        type : AUTH_LOGIN_FAILURE,
        payload : err
    }
}

const authLogin = (payload) => {
    return dispatch => {
        dispatch(loginStart())
        axios.post('http://127.0.0.1:8000/login/',payload).then(res => {
            localStorage.setItem('userData',JSON.stringify(res.data))
            dispatch(loginSuccess(res))
        }).catch(err => {
            dispatch(loginfailure(err))
        })
    }
}

export default authLogin

const logout = (data) => {
    return {
        type : AUTH_LOGOUT,
        payload : data
    }
}

export const authLogout = (payload) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/logout/').then(res => {
            dispatch(logout(payload))
            localStorage.clear()
        }).catch(err => {
            console.log(err)
        })
    }

}


const googleLoginStart = () => {
    return {
        type : AUTH_GOOGLE_LOGIN_START
    }
}

const googleLoginSuccess = (data) => {
    return {
        type : AUTH_GOOGLE_LOGIN_SUCCESS,
        payload : data
    }
}

const googleLoginFailure = (err) => {
    return {
        type : AUTH_GOOGLE_LOGIN_FAILURE,
        payload : err
    }
}


export const authGoogleLogin = (payload) => {
    return dispatch => {
        dispatch(googleLoginStart())
        axios.post('http://localhost:8000/google/',payload).then(res => {
            localStorage.setItem('userData',JSON.stringify(res.data))
            dispatch(googleLoginSuccess(res))
        }).catch(err => {
            dispatch(googleLoginFailure(err))
        })
    }
}


const signupStart = () => {
    return {
        type : AUTH_SIGNUP_START,
    }
}

const signupSuccess = (data) => {
    return {
        type : AUTH_SIGNUP_SUCCESS,
        payload : data
    }
}

const signupFailure = (err) => {
    return {
        type : AUTH_SIGNUP_FAILURE,
        payload : err
    }
}

export const authSignup = (payload) => {
    return dispatch => {
        dispatch(signupStart())
        axios.post('http://localhost:8000/register/',payload).then(res => {
            localStorage.setItem('userData',JSON.stringify(res.data))
            dispatch(signupSuccess(res))
        }).catch(err => {
            dispatch(signupFailure(err))
        })
    }
}






