import React, { useState } from "react";
import "./Login.css";
import axios from "../../api/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initial = {
  UserName: "john32",
  password: "12345678",
};
function Login() {
  let navigate = useNavigate();
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
        navigate("/");
        toast.success(`${res.data.message} code:${res.data.statusCode}`);
      })
      .catch((err) => {
        localStorage.removeItem("user");
        toast.error(err.message);
      });
  };
  return (
    <div>
      <div
        style={{ position: "fixed", transform: "translate(-50%, -50%)" }}
        className="f3"
      >
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
