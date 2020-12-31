import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <div className={"logo"}>
                <img src="../LOGO.png" alt=""/>
                <h2>
                    <HeaderNavItem exact to="/" name="Home" />
                </h2>
            </div>

            <div className={"buttons"}>
                <button>
                    <HeaderNavItem to="/blog" name="Blog" />
                </button>
                <button>
                    <HeaderNavItem to="/login" name="Login" />
                </button>
            </div>
        </nav>
    );
}

function HeaderNavItem(props) {
    return (
        <NavLink
            to={props.to}
            className="nav-item"
            exact={props.exact ? true : false}
            activeClassName="active"
        >
            {props.name}
        </NavLink>
    );
}