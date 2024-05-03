import styles from "../styles/Login.module.css";
import { Popover, Button } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={"../tweet.png"} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div>logo</div>
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
