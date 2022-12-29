import { AUTH_LOGIN } from "store/constants/loginConstants";

const initialState = {
    data : {
        email : '',
        password : '',
        remember : false
    }
}

const authLoginReducer = (state = initialState , action) => {
    
    switch (action.type) {
        case AUTH_LOGIN : {
            console.log(action,'payloadishereeeeeeeeeeeeeeeeeeeeeeeeeee')
            return {
                // ...state,
                // email: action.data.email,
                // password: action.data.password,
                // remember: action.data.remember,
                data : action.data
            }
        }
        default : {
            console.log(state,'payloadishere')
            return state
        }
    }
}

export default authLoginReducer