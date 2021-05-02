import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({component: Component, ...rest}) => {

    const isAuth = useSelector(state => state.auth)

    return (
        <Route
            {...rest}
            render={
                props => {
                    if (isAuth) {
                        return <Component {...props}/>
                    } else {
                        return <Redirect to={{pathname: '/login/', state: {from: props.location}}}/>
                    }
                }
            }
        />
    );
};

export default ProtectedRoute;