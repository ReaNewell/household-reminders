import React, { useState } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  const [selectedForm, setSelectedForm] = useState("");

  const handleChangeSelectedForm = (event) => {
    switch (event.target.name) {
      case "signup":
        setSelectedForm("signup");
        break;
      case "login":
        setSelectedForm("login");
        break;
      default:
        setSelectedForm("");
        break;
    }
  };

  const display = () => {
    switch (selectedForm) {
      case "signup":
        return (
          <div className="login__buttons">
            <LoginForm handleChangeSelectedForm={handleChangeSelectedForm} selectedForm= {selectedForm} />
          </div>
        );
      case "login":
        return (
          <div className="login__buttons">
            <LoginForm handleChangeSelectedForm={handleChangeSelectedForm} selectedForm= {selectedForm} />
          </div>
        );
      default:
        return (
          <div className="login__buttons">
            <button onClick={handleChangeSelectedForm} className="login__button" name="signup">
              Get Started
            </button>
            <button onClick={handleChangeSelectedForm} className="login__button" name="login">
              Login
            </button>
          </div>
        );
    }
  };

  return (
    <div className="login">
      <h1 className="login__header">Kaji</h1>
      {display()}
    </div>
  );
};

export default Login;
