import styles from "../styles/Signup.module.css";
import { useState } from "react";

function Signup() {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [result, setResult] = useState("");

  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(signInUsername);
        console.log(data.token);
        if (data.result) {
          // dispatch(login({ username: signInUsername, token: data.token }));
          setResult(data.token);
        } else {
          setResult("User non trouvé!");
        }
        setSignInUsername("");
        setSignInPassword("");
      });
  };

  return (
    <div className={styles.signin}>
      <h2>Connect to Hackatweet</h2>
      <input
        type="text"
        placeholder="Username"
        id="signUpUsername"
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
      />
      <input
        type="password"
        placeholder="Password"
        id="signUpPassword"
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
      />
      <button id="Sign in" onClick={() => handleSignIn()}>
        Sign in
      </button>
      <div>{result}</div>
    </div>
  );
}

export default Signup;
