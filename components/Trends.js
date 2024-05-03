import styles from "../styles/Trends.module.css";
import React from "react";
import { useEffect, useState } from "react";

function Trends(props) {
  const [hashtag, setHashtag] = useState([]);

  let hash;
  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.allTweets);
        const hashtagTweet = [];
        for (const tweet of data.allTweets) {
          if (tweet.content.includes("#")) {
            hashtagTweet.push(tweet);
          }
        }
        console.log(hashtagTweet);

        for (const tweet of hashtagTweet) {
          hash = tweet.content.slice(tweet.content.indexOf("#"));
          //   !hashtag.includes(hash) && hashtag.push(hash);
          !hashtag.includes(hash) && setHashtag(hashtag.push(hash));
          //   hashtag.push(tweet.content.slice(tweet.content.indexOf("#")));
        }
        console.log(hashtag);
      });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.trends}>
        <h3>Trends</h3>
      </div>

      <div className={styles.hashtags}>
        <p>{hashtag[0]}</p>
        <p>{hashtag[1]}</p>
        <p>{hashtag[2]}</p>
      </div>
    </div>
  );
}

export default Trends;
