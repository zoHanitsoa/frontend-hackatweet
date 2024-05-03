import styles from "../styles/Home.module.css";
import Image from "next/image";
import React from "react";
import Tweet from "./Tweet";
import Trends from "./Trends";
import { logout } from "../reducers/user";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";

function Home() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  console.log("avant", user.isConnected);
  return user.isConnected ? (
    <div>
      <main className={styles.main}>
        <div className={styles.homeLeft}>
          <span className={styles.logo}>
            {" "}
            <Image
              src="/logo.png"
              alt="logo-twitter"
              width={200}
              height={150}
            />
          </span>

          <div className={styles.bottomHomeSection}>
            <div className={styles.userInfo}>
              <p> {user.firstname}</p>
              <p>{user.username}</p>
            </div>
            <button className={styles.logout} onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </div>

        <div className={styles.tweetSection}>
          <Tweet />

          <div className={styles.lastTweetsSection}>
            <LastTweets />
          </div>
        </div>

        <div className={styles.trendsSection}>
          <Trends />
        </div>
      </main>
    </div>
  ) : (
    <Login />
  );
}

export default Home;
