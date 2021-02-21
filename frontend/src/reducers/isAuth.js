import Cookies from "js-cookie";

const isAuth = (state = false, action) => {
    switch (action.type) {
        case 'IS_AUTH':
            Cookies.set('auth_token', action.payload)
            return true

        case 'NOT_AUTH':
            Cookies.remove('auth_token')
            return false

        default:
            return false
    }
};

export default isAuth;