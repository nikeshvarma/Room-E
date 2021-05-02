import Cookies from "js-cookie";
import {IS_AUTH, IS_AUTH_FALSE} from "./authTypes";


const isAuthReducer = (state = false, action) => {
    switch (action.type) {
        case IS_AUTH:
            Cookies.set('auth_token', action.payload, {secure: 'true', sameSite: 'Lax'})
            return true

        case IS_AUTH_FALSE:
            Cookies.remove('auth_token')
            return false

        default:
            return false
    }
};

export default isAuthReducer;