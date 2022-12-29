import { AUTH_LOGIN } from "store/constants/loginConstants"

export const authLoginAction = (data) => {
    return {
        type : AUTH_LOGIN,
        data : data
    }
}