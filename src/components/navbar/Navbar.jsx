import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useLocation } from "react-router-dom";
function Navbar() {
  let { pathname } = useLocation();
  if (pathname == "/login" || pathname == "/register") {
    return <></>;
  }
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <h1>
              {user ? user.FirstName : "User Name"}:{user ? user.role : "role"}
            </h1>
          </NavLink>
          <div className="a">
            <NavLink to={"/"}>Home</NavLink>
            {user?.role === "admin" ? (
              <div className="a1">
                <FaUsers />
                <NavLink to={"/user"}>Users</NavLink>
              </div>
            ) : (
              ""
            )}
            <div className="a1">
              <FiLogIn />
              <NavLink to={"/login"}>Login</NavLink>
            </div>
            <NavLink to={"/register"}>Register</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
