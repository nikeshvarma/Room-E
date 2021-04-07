import React from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import HomeList from "./components/pages/HomeList";
import Notfound from "./components/pages/Notfound";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Logout from "./components/pages/Logout";
import Footer from "./components/layout/Footer";

const Main = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/all" component={HomeList}/>
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