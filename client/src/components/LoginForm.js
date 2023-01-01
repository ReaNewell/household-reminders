import React, { useRef, useState } from "react";
import { startLoginWithEmail, startSignUp } from "../actions/auth";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({
    signUpEmail: "",
    loginEmail: "",
    error: null,
    signUpPassword: "",
    loginPassword: "",
  });
  const myRef = useRef();

  // When characters are input to the textboxes, state will update on change.
  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleCancelSelection = () => {
    props.handleChangeSelectedForm(event);
  }

  const signupWithEmail = () => {
    if (
      formState.signUpEmail &&
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formState.signUpPassword)
    ) {
      startSignUp(formState.signUpEmail, formState.signUpPassword);
    //   myRef.current.forceUpdate();
    } else {
      this.setState(() => ({
        error:
          "The email and/or password is invalid. Password must contain eight characters, at least one number, and at least one letter.",
      }));
    }
  };
  const loginWithEmail = () => {
    if (
      formState.loginEmail &&
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formState.loginPassword)
    ) {
      startLoginWithEmail(formState.loginEmail, formState.loginPassword);
    //   myRef.current.forceUpdate();
    } else {
      this.setState(() => ({
        error:
          "The email and/or password is invalid. Password must contain eight characters, at least one number, and at least one letter.",
      }));
    }
  };

  return props.selectedForm === "signup" ? (
    <div className="login-form">
      <input
        type="email"
        name="signUpEmail"
        onChange={handleOnChange}
        value={formState.signUpEmail}
        placeholder='Email'
        className="login-form__input login-form__input--email"
      />
      <input
        type="password"
        name="signUpPassword"
        onChange={handleOnChange}
        value={formState.signUppassword}
        placeholder='Password'
        className="login-form__input login-form__input--emai"
      />
      <button onClick={signupWithEmail} className="login-form__button">SIGN UP</button>
      <button onClick={handleCancelSelection} className="login-form__button--cancel">Nevermind</button>
    </div>
  ) : (
    <div className="login-form">
      <input
        type="email"
        name="loginEmail"
        onChange={handleOnChange}
        value={formState.loginEmail}
        placeholder='Email'
        className="login-form__input login-form__input--emai"
      />
      <input
        type="password"
        name="loginPassword"
        onChange={handleOnChange}
        value={formState.loginPassword}
        placeholder='Password'
        className="login-form__input login-form__input--emai"
      />
      <button onClick={loginWithEmail} className="login-form__button">LOGIN</button>
      <button onClick={handleCancelSelection} className="login-form__button--cancel">Nevermind</button>
    </div>
  );
};

export default LoginForm;
