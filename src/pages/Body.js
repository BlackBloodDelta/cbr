import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Blog from "./Blog";
import Post from "./Post";
import Login from "./Login";
import PostCad from "./PostCad";
import Test from "./Test";

export default function Body({user}) {
    return (
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:id" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/teste" component={Test} />
            <Route path="/admin">
                {user ? <Redirect to="/login" /> : <PostCad />}
            </Route>
        </Switch>
    );
}