import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading() {
    return (
        <div className="d-flex justify-content-center spinner-top">
            <CircularProgress size={60} thickness={2}/>
        </div>
    );
}

export default Loading;