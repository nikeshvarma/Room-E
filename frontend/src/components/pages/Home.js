import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {IS_AUTH} from "../../redux/auth/authTypes";

const Home = () => {

    const dispatch = useDispatch();
    const authToken = Cookies.get('auth_token');

    useEffect(() => {
        if (authToken) {
            dispatch({type: IS_AUTH, payload: authToken})
        }
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;