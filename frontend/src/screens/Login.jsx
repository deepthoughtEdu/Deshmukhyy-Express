import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { loginUser } from "../utilities";
import "../auth-pages.css";

export default function Authentication() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleLoginAction = async (event) => {
    await loginUser(values);
    swal(
      'Success!',
      'Logged in successfully',
      'success'
  ).then(() => {
      navigate(0);
  });
  };

  const valueOnChange = (event) => {
    setValues((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="form">
      <form className="form-horizontal signin">
        <div className="form-wrap" style={{ position: "relative" }}>
          <h2>Login</h2>
          <div className="form-group">
            <div className="relative">
              <input
                className="form-control"
                name="username"
                type="text"
                required
                value={values.username}
                onChange={valueOnChange}
                placeholder="Username"
              />
              <i className="fa fa-user"></i>
            </div>
          </div>

          <div className="">
            <div className="relative">
              <input
                className="form-control"
                name="password"
                type="password"
                required
                value={values.password}
                onChange={valueOnChange}
                placeholder="Password"
              />
              <i className="fa fa-key"></i>
            </div>
          </div>

          <div className="login-btn">
              <button
                className="movebtn movebtnsu"
                type="button"
                onClick={handleLoginAction}
              >
                Login <i className="fa fa-fw fa-lock"></i>
              </button>
          </div>
        </div>
        <div className="sign-up">
          <a href="/sign-up" className="signbtn">
            <small>Not a member? Sign Up</small>
          </a>
        </div>
      </form>
    </div>
  );
}
