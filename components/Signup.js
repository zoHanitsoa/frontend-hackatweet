import styles from "../styles/Signup.module.css";
import { useState } from "react";
import { login, logout } from "../reducers/user";
import { useDispatch } from "react-redux";

function Signup() {
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [result, setResult] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: signUpUsername,
              firstname: firstname,
              token: data.token,
              isConnected: data.result,
            })
          );
          setSignUpUsername("");
          setSignUpPassword("");
          setFirstname("");
          console.log(data.result);
          setResult("user enregistré!");
        }
      });
  };

  return (
    <div className={styles.signup}>
      <h2>Create your Hackatweet account</h2>
      <input
        type="text"
        placeholder="firstname"
        id="firstname"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
      />
      <input
        type="text"
        placeholder="Username"
        id="signUpUsername"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
      />
      <input
        type="password"
        placeholder="Password"
        id="signUpPassword"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
      />
      <button id="Sign up" onClick={() => handleSignUp()}>
        Sign up
      </button>
      <div>{result}</div>
    </div>
  );
}

export default Signup;
