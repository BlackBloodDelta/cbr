import firebaseconfig from './firebaseIndex'
import firebase from 'firebase'
import Header from "../pages/Header";
import Body from "../pages/Body";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

export const authMethods = {
    // firebase helper methods go here...
    signup: (email, password) => {

    },
    signin: (email, password) => {

    },
    signout: (email, password) => {

    },
}

// <Router>
//     <div className="App">
//         <Header />
//
//         {user ? <Body /> : "AAAAAAAAAA"}
//     </div>
// </Router>