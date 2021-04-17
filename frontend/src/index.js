import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {BrowserRouter} from "react-router-dom";
import './style/index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import isAuthReducer from "./redux/auth/authReducer";
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const store = createStore(combineReducers({
        auth: isAuthReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    //<React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    //</React.StrictMode>,
    document.getElementById('root')
);

serviceWorkerRegistration.unregister();