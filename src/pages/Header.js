import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({handleLogout, user}) {
    let admin, login, logout;

    if (user) {
        admin =
            <NavLink to="/admin" className="nav-item" activeClassName="active">
                <button>Criar</button>
            </NavLink>
        logout = <button onClick={handleLogout}>Log out</button>;
    } else {
        login =
            <NavLink to="/login" className="nav-item" activeClassName="active">
                <button>Login</button>
            </NavLink>
    }

    return (
        <nav>
            <div className={"logo"}>
                <NavLink exact to="/" className="nav-item" activeClassName="active">
                    <h2>Home</h2>
                </NavLink>
            </div>

            <div className={"buttons"}>
                <NavLink to="/blog" className="nav-item" activeClassName="active">
                    <button>Blog</button>
                </NavLink>

                {admin}
                {login}
                {logout}
            </div>
        </nav>
    );
}