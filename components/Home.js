import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React from 'react';
import Tweet from './Tweet';
import Trends from './Trends';

function Home() {



  return (
    <div>
      <main className={styles.main}>

      <div className={styles.homeLeft}>
      <span className={styles.logo}> <Image src='/logo.png' alt='logo-twitter' width={200} height={150}  /></span>

          <div className= {styles.bottomHomeSection}>
              <div className={styles.userInfo}>UserInfo</div>
              <button className= {styles.logout} onClick={console.log('logout')}>Logout</button>
          </div>
      </div>



      <div className={styles.tweetSection}>
       
            <Tweet/>

                <div className={styles.lastTweetsSection}>
                    <p>last tweets</p>
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
