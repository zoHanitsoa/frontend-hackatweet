import Image from 'next/image';
import styles from '../styles/SingleTweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart }  from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTweet } from '../reducers/tweets';


// import { useSelector , useDispatch } from 'react-redux';


function SingleTweet(props) {

	const [like, setLike]= useState(false)
	const user = useSelector((state) => state.user.value)
	const dispatch = useDispatch();
	// console.log('user',user)
	// const dispatch = useDispatch();
	// const bookmarks = useSelector((state) => state.bookmarks.value);
	

	// const handleArticleClick = () => {
		
	//  if (props.isBookmarked) {
	// 	console.log('présennnnt')
	//    dispatch(removeBookmark(props));
	//  } else {
	// 	console.log('pas présent')
	//    dispatch(addBookmark(props));
	//  }
	//  console.log('Bookmarkkkk', bookmarks)
	// }
	


	const handleLikeClick = () => {
		console.log('like/not like')
		setLike(!like)
	}


	

	const handleTrashCanClick = ()  => {
		console.log('Delete in process', props)
		console.log(props.tweetId)
		fetch(`http://localhost:3000/tweets/delete/${props.tweetId}`)
		// .then(response => response.json())
		// .then(data => console.log(data))
	

		.then(dispatch(removeTweet()))

	}


	let trashVisible = false;
	if (props.isWriter){
		trashVisible = true;
	}
	
	let iconStyle = {};
	if (like) {
	 iconStyle = {'color': 'red'};
	}


	return (
		<div className={styles.singleTweet}>

            <div className={styles.userInfos} >
			<span className={styles.imageContainer}><  Image  className={styles.image} src='/userImage.jpg' alt='logo-twitter' width={25} height={40}  /></span>  
            <span className={styles.firstname}>{props.firstname}</span>
			<span className={styles.username}>@{props.username}</span> 
            <span className={styles.date}> - {props.date}</span> 
            </div>

            <div className={styles.tweetContent}>
            <span>{props.tweetContent}</span>
            </div>

            <div className={styles.actions}>
            <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeClick()} style={iconStyle} /> {props.nbLike} {trashVisible && <FontAwesomeIcon icon={faTrashCan} onClick={() => handleTrashCanClick()}  style={{'color' : 'grey'}}/>} </span>
            </div>
			{/* <FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmarkClick()} style={iconStyle} className={styles.bookmarkIcon} />} */}
            </div>

			/* <div className={styles.articleHeader}>
				<h3>{props.title}</h3>
				<FontAwesomeIcon icon={faBookmark} style={iconStyle} className={styles.bookmarkIcon} onClick={() => handleArticleClick()}/>
			</div>
			<h4 style={{ textAlign: "right" }}>- {props.author}</h4>
			<div className={styles.divider}></div>
			<Image src={props.urlToImage} alt={props.title} width={600} height={314} />
			<p>{props.description}</p> */
		
	);
}

export default SingleTweet;
