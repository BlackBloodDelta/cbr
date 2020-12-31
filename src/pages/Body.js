import React from "react";
import { Route, Switch } from "react-router-dom";
import Blog from "./Blog";
import Post from "./Post";
import Login from "./Login";
import PostCad from "./PostCad";

export default function Body() {
    return (
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:id" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={PostCad} />
        </Switch>
    );
}