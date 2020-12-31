import React from "react";
import './App.css';
import Header from "./pages/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Body from "./pages/Body";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Body />
            </div>
        </Router>
    );
}

export default App;
