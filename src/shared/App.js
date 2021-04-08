import React,{useEffect, useState} from "react";
import {Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Home from "../pages/Home";

import "./App.css";
import Header from "../components/Header";
import Detail from "../pages/Detail";
import Footer from "../components/Footer";
import Top from "../components/Top";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useSelector } from "react-redux";



function App() {
  const is_login = useSelector((state)=>state.user.is_login)
  const [isSession, setIsSession] = useState(is_login)
  useEffect(()=>{
    const is_session = sessionStorage.getItem('token') ? true : false;
    setIsSession(is_session)
  },[is_login])
  return (
    <>
    <Top is_login={isSession}/>
    <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={Detail} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup}/>
      </ConnectedRouter>
      <Footer/>

    </>
  );
}

export default App;
