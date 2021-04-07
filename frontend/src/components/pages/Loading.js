import React from 'react';
import spinner from "../../images/loader.gif";

function Loading() {
    return (
        <div className="d-flex justify-content-center spinner-top">
            <img src={spinner} alt="spinner-img" width="70px"/>
        </div>
    );
}

export default Loading;