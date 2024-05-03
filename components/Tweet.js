// import { useDispatch, useSelector } from 'react-redux';
// import { addBookmark, removeBookmark } from '../reducers/bookmarks';
// import {handleVisible} from '../reducers/hiddenArticles';
// import Image from 'next/image';
// import styles from '../styles/Article.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Tweet.module.css';
import React from "react";
import {useState } from 'react';
import { useSelector } from 'react-redux';

function Tweet(props) {

		// reducer user
	const user = useSelector((state) => state.user.value)
	console.log('user',user)


	const [count, setCount] = useState(0);
	const [ tweetText, setTweetText ] = useState('');


// Gestion de l'affichage de l'input pour avoir le compteur dynamique
	function handleInputTweet(e) {
		console.log('manu')
		setCount(e.target.value.length)
		setTweetText(e.target.value)

	}

	// Enregistrement du tweet de l'utilisateur dans la base de données
	function handleTwitterClick() {
		if (count > 0) {
			fetch(`http://localhost:3000/tweets/newTweet`,{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({  tweetContent : tweetText , token : 'mEndfPqSDZmEzLLT4WMRUhY8Q1c4gpdh'}),
			})
			.then(response => response.json())
			.then(data =>  {
				console.log(data)})
				setTweetText('')
				setCount(0)
			}}

			


	// 				if (props.isBookmarked) {
	// 					dispatch(removeBookmark(props));
	// 				} else {
	// 					dispatch(addBookmark(props));
	// 				}
	// 			}
	// 		};

	// 	}

	// }


// 	const dispatch = useDispatch();
// 	const user = useSelector((state) => state.user.value);

// 	const articlesHidden = useSelector((state) => state.hiddenArticles.value);
// console.log(articlesHidden)

// 	const handleBookmarkClick = () => {
// 		if (!user.token) {
// 			return;
// 		}

// 		fetch(`http://localhost:3000/users/canBookmark/${user.token}`)
// 			.then(response => response.json())
// 			.then(data => {
// 				if (data.result && data.canBookmark) {
// 					if (props.isBookmarked) {
// 						dispatch(removeBookmark(props));
// 					} else {
// 						dispatch(addBookmark(props));
// 					}
// 				}
// 			});
// 	}



// 	const handleVisibleArticleClick = () => {
// 		console.log('visible / not visible')
// 		// console.log(props)
// 		dispatch(handleVisible(props))
// 	}

// 	let eyeVisible = false
// 	if (props.eyeVisible) {
// 		eyeVisible= true;
// 	}


// 	let iconStyle = {};
// 	if (props.isBookmarked) {
// 		iconStyle = { 'color': '#E9BE59' };
		

// 	}

// 	let articleVisible = false;
// 	if (props.isVisible) {
// 		articleVisible = true
// 	}

	return (

		
			<div className={styles.main}>

				<div className={styles.home} >
					<p >Home</p>
				</div>

				<div className={styles.tweetInputSection}>
					<input type="text" className={styles.tweetInput} placeholder="What's up ?" name="name" required minLength="1" maxLength="280" size="10"  onChange={(e) => handleInputTweet(e)} value={tweetText}/>
					
				
				</div>
				


				<div className={styles.buttonSection}>
					<p className={styles.counter}>{count}/280</p>
					<button className= {styles.twitterButton} onClick={() => handleTwitterClick()}>Twitter</button>
				</div>

			</div>
		
		
		
	);
}

export default Tweet;
