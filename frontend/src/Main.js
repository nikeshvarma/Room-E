import React from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./components/home/About";
import Home from "./components/home/Home";
import HomeList from "./components/home/HomeList";
import Notfound from "./components/home/Notfound";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Logout from "./components/auth/Logout";
import Footer from "./components/layout/Footer";

const Main = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search/" component={HomeList}/>
                <Route exact path="/about/" component={About}/>
                <Route exact path="/login/" component={Login}/>
                <Route exact path="/signup/" component={Signup}/>
                <Route exact path="/logout/" component={Logout}/>
                <Route component={Notfound}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default Main;