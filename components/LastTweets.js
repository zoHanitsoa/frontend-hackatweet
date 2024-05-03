import styles from '../styles/LastTweets.module.css';
import React from "react";
import { useEffect, useState } from 'react';
import SingleTweet from './SingleTweet';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialNbTweets } from '../reducers/tweets';

function LastTweets(props) {

	const [lastTweets, setLastTweets]= useState([])
	const user = useSelector((state) => state.user.value)
	const nbTweets = useSelector((state) => state.tweets.value)
	console.log('reducers tweet',nbTweets)
	const dispatch = useDispatch();

const displayAllTweets  = () => {
	fetch(`http://localhost:3000/tweets`)
	.then(response => response.json())
	.then(data => {
		console.log('les tweets sont' ,data)
		setLastTweets(data.allTweets)
		dispatch(setInitialNbTweets({nbTweets : data.allTweets.length}))
	})
}


	useEffect(() => {

		displayAllTweets()
	  }, [nbTweets]);

	  

	  const tweets = lastTweets.map((data, i) => {
		// console.log(data)
		// const isBookmarked = bookmarks.some(bookmark => bookmark.title == data.title)
		const isWriter = user.token == data.user.token;
		// return <Article key={i} {...data}  isBookmarked={isBookmarked}/>;
		return <SingleTweet key={i}  tweetId={data._id} isWriter={isWriter} username={data.user.username} firstname={data.user.firstname} date={data.date} tweetContent={data.content} nbLike={data.nbLike}/>;
	  });
	


	return (

		
			<div className={styles.main}>

				
					{tweets}
				

			</div>
		
		
		
	);
}

export default LastTweets;