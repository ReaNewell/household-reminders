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
    <div>
      <input
        type="email"
        name="signUpEmail"
        onChange={handleOnChange}
        value={formState.signUpEmail}
      />
      <input
        type="password"
        name="signUpPassword"
        onChange={handleOnChange}
        value={formState.signUppassword}
      />
      <button onClick={signupWithEmail}>SIGN UP</button>
    </div>
  ) : (
    <div>
      <input
        type="email"
        name="loginEmail"
        onChange={handleOnChange}
        value={formState.loginEmail}
      />
      <input
        type="password"
        name="loginPassword"
        onChange={handleOnChange}
        value={formState.loginPassword}
      />
      <button onClick={loginWithEmail}>LOGIN</button>
    </div>
  );
};

export default LoginForm;
