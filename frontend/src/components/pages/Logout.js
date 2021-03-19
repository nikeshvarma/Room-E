import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {IS_AUTH_FALSE} from "../../redux/auth/authTypes";


const Logout = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: IS_AUTH_FALSE
        })
    })

    function redirectAfterLogout() {
        history.push('/');
    }

    return (
        <div>
            {redirectAfterLogout()}
        </div>
    );
}

export default Logout;