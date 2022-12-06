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
          <div>
            <LoginForm selectedForm= {selectedForm} />
            <button onClick={handleChangeSelectedForm} name="login">
              Login
            </button>
          </div>
        );
      case "login":
        return (
          <div>
            <LoginForm selectedForm= {selectedForm} />
            <button onClick={handleChangeSelectedForm} name="signup">
              Get Started
            </button>
          </div>
        );
      default:
        return (
          <div>
            <button onClick={handleChangeSelectedForm} name="signup">
              Get Started
            </button>
            <button onClick={handleChangeSelectedForm} name="login">
              Login
            </button>
          </div>
        );
    }
  };

  return (
    <div>
      <h1>Household Reminders</h1>
      {display()}
    </div>
  );
};

export default Login;
