import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useLocation } from "react-router-dom";
function Navbar() {
  let { pathname } = useLocation();
  if (pathname === "/login") {
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
            {!user ? (
              <div className="a1">
                <FiLogIn />
                <NavLink to={"/login"}>Login</NavLink>
              </div>
            ) : (
              ""
            )}
            {user?.role === "admin" ? (
              <NavLink to={"/create"}>Create Product</NavLink>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
