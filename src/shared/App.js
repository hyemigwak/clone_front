import React from "react";
import {Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Home from "../pages/Home";

import "./App.css";
import Header from "../components/Header";
import Detail from "../pages/Detail";
import Footer from "../components/Footer";


function App() {
  return (
    <>
    <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={Detail} />
      </ConnectedRouter>
      <Footer/>

    </>
  );
}

export default App;
