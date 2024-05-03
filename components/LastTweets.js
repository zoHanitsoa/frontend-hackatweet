import styles from '../styles/LastTweets.module.css';
import React from "react";


function LastTweets(props) {



	
	fetch(`http://localhost:3000/tweets`)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})


	return (

		
			<div className={styles.main}>

				<div className={styles.trends} >
					<h3 >Trends</h3>
				</div>

				<div className={styles.hashtags}>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
				

			</div>
		
		
		
	);
}

export default LastTweets;