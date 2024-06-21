import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import axios from "../../api/index";
import { toast } from "react-toastify";
const initial = {
  UserName: "john32",
  password: "12345678",
};
function Login() {
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/sign-in", formData)
      .then((res) => {
        localStorage.setItem("x-auth-token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        toast.success(`${res.data.message} code:${res.data.statusCode}`);
      })
      .catch((err) => {
        localStorage.removeItem("user");
        toast.error(err.message);
      });
  };
  return (
    <div>
      <div className="f3">
        <form onSubmit={handleLogin} className="form" action="">
          <p>Username</p>
          <input
            value={formData.UserName}
            onChange={handleChange}
            required
            type="text"
            name="UserName"
            id=""
            placeholder="Your username"
          />
          <p>Password</p>
          <input
            value={formData.password}
            onChange={handleChange}
            required
            type="password"
            name="password"
            id=""
            placeholder="Your password"
          />

          <div className="f4">
            <button>LOG IN</button>
            <NavLink to={"/"}>
              <button>Go Back</button>
            </NavLink>
            <h3>
              <NavLink to={"/register"}> Sign Up</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
