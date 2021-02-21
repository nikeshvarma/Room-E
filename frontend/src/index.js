import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './style/index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import isAuth from "./reducers/isAuth";


const store = createStore(combineReducers({
        auth: isAuth
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

