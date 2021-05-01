import React from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./components/home/About";
import Home from "./components/home/Home";
import FlatList from "./components/home/FlatList";
import Notfound from "./components/layout/Notfound";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Logout from "./components/auth/Logout";
import Footer from "./components/layout/Footer";
import FlatDetail from "./components/home/FlatDetail";
import registerOwner from "./components/owner/registerOwner";

const Main = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/login/" component={Login}/>
                <Route exact path="/signup/" component={Signup}/>
                <Route exact path="/logout/" component={Logout}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search/" component={FlatList}/>
                <Route exact path="/about/" component={About}/>
                <Route exact path="/view/property/:flatId/" component={FlatDetail}/>
                <Route exact path="/register/" component={registerOwner}/>
                <Route component={Notfound}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default Main;