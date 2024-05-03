import styles from "../styles/Login.module.css";
import { Popover, Button } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
import { useSelector } from "react-redux";
import Home from "./Home";

function Login() {
  const user = useSelector((state) => state.user.value);

  return user.isConnected ? (
    <Home />
  ) : (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={"../tweet.png"} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div>
          <img src={"../logo.png"} className={styles.logo} />
        </div>
        <h1 className={styles.title}>See what's happening</h1>
        <p className={styles.invite}>Join Hackatweet today.</p>

        <Popover title="image" content={<Signup />} trigger="click">
          <Button type="primary" className={styles.button}>
            Sign up
          </Button>
        </Popover>

        <p>Already have an account?</p>
        <Popover title="Sign in" content={<Signin />} trigger="click">
          <Button type="primary" className={styles.button}>
            Sign in
          </Button>
        </Popover>
      </div>
    </div>
  );
}

export default Login;
