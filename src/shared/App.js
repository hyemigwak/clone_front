import React,{useEffect, useState} from "react";
import {Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import AddProduct from "../pages/AddProduct";

import Home from "../pages/Home";
import "./App.css";
import Header from "../components/Header";
import Detail from "../pages/Detail";
import Footer from "../components/Footer";
import Top from "../components/Top";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useDispatch, useSelector } from "react-redux";



function App() {
  const dispatch = useDispatch()
  const is_login = useSelector((state)=>state.user.is_login)
  useEffect(()=>{
    const is_session = sessionStorage.getItem('token') ? true : false;
    dispatch(userActions.loginCheck(is_session))
  },[])
  return (
    <>
    <Top is_login={is_login}/>
    <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={Detail} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup}/>
        <Route path="/add" exact component={AddProduct}/>
      </ConnectedRouter>
      <Footer/>

    </>
  );
}

export default App;
