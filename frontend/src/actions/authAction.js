export const is_auth_true = token => {
    return {
        type: 'IS_AUTH',
        payload: token
    }
}

export const is_auth_false = () => {
    return {
        type: 'NOT_AUTH',
    }
}