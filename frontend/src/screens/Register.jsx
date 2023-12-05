import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { registerUser } from "../utilities";

export default function Authentication() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const valuesOnChange = (event) => {
    setUserData((previouData) => ({
      ...previouData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterationAction = async () => {
    await registerUser(userData);
    swal(
      'Success!',
      'SignUp successfully',
      'success'
    ).then(() => {
        navigate('/');
    });
  };

  return (
    <div className="form">
      <form className="form-horizontal signup">
        <div className="form-wrap" style={{ position: "relative" }}>
          <h2>Sign Up</h2>

          <div className="form-group">
            <div className="relative">
              <input
                onChange={valuesOnChange}
                value={userData.email}
                className="form-control"
                type="text"
                name="email"
                placeholder="Email Address"
              />
              <i className="fa fa-envelope"></i>
            </div>
          </div>
          <div className="form-group">
            <div className="relative">
              <input
                onChange={valuesOnChange}
                value={userData.username}
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
              />
              <i className="fa fa-user"></i>
            </div>
          </div>

          <div className="form-group">
            <div className="relative">
              <input
                onChange={valuesOnChange}
                value={userData.password}
                id="password"
                className="form-control"
                type="password"
                name="password"
                required
                placeholder="Password"
              />
              <i className="fa fa-key"></i>
            </div>

          </div>

          <div className="login-btn">
            <button
              onClick={handleRegisterationAction}
              className="movebtn movebtnsu"
              type="button"
            >
              Submit <i className="fa fa-fw fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <div className="sign-up">
          <a href="/" className="signbtn">
            <small>Already member? Sign in </small>
          </a>
        </div>
      </form>
    </div>
  );
}
