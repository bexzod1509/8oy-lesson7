import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../api/index";
import { toast } from "react-toastify";
const initial = {
  FirstName: "",
  LastName: "",
  phones: "",
  UserName: "",
  password: "",
};
function Register() {
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    formData.phones = [formData.phones];
    axios
      .post("/auth/user/sign-up", formData)
      .then((res) =>
        toast.success(`${res.data.message} code:${res.data.statusCode}`)
      )
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="f3">
        <form onSubmit={handleRegister} className="form" action="">
          <p>First Name</p>
          <input
            value={formData.FirstName}
            onChange={handleChange}
            required
            type="text"
            name="FirstName"
            id=""
            placeholder="Your First Name"
          />
          <p>Last Name</p>
          <input
            onChange={handleChange}
            value={formData.LastName}
            required
            type="text"
            name="LastName"
            id=""
            placeholder="Your Last Name"
          />
          <p>Phone</p>
          <input
            onChange={handleChange}
            value={formData.phones}
            required
            type="tel"
            name="phones"
            id=""
            placeholder="Your Phone"
          />
          <p>Username</p>
          <input
            onChange={handleChange}
            value={formData.UserName}
            required
            type="text"
            name="UserName"
            id=""
            placeholder="Your username"
          />
          <p>Password</p>
          <input
            onChange={handleChange}
            value={formData.password}
            required
            type="password"
            name="password"
            id=""
            placeholder="Your password"
          />

          <div className="f4">
            <button>SIGN UP</button>
            <NavLink to={"/"}>
              <button>Go Back</button>
            </NavLink>
            <h3>
              <NavLink to={"/login"}>Login</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
