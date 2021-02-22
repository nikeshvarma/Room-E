import {IS_AUTH, IS_AUTH_FALSE} from "./authTypes";

export const authTrue = token => {
    return {
        type: IS_AUTH,
        payload: token
    }
}

export const authFalse = () => {
    return {
        type: IS_AUTH_FALSE,
    }
}