import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React from 'react';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';
import { useSelector } from 'react-redux';

function Home() {

	const user = useSelector((state) => state.user.value)
	console.log('user',user)

  return (
    <div>
      <main className={styles.main}>

      <div className={styles.homeLeft}>
      <span className={styles.logo}> <Image src='/logo.png' alt='logo-twitter' width={200} height={150}  /></span>

          <div className= {styles.bottomHomeSection}>
              <div className={styles.userInfo}>
                <p>{user.firstName}</p>
                <p>{user.username}</p>

              </div>
              <button className= {styles.logout} onClick={console.log('logout')}>Logout</button>
          </div>
      </div>



      <div className={styles.tweetSection}>
       
            <Tweet/>

                <div className={styles.lastTweetsSection}>
                  <LastTweets/>
                </div>
          
       

        
            
      </div>

      <div className={styles.trendsSection}> 
        <Trends/>
      </div>

      </main>
    </div>
  );
}

export default Home;
