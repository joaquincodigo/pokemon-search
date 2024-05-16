import React from 'react';
import './loadingAnimation.css'
import loadingGif from './loading.gif';


function LoadingAnimation() {
	return (
		<div className="loading-animation-container">
			<img src={loadingGif} alt="Loading Animation Gif" className='loading-gif' />
		</div>
	);
}

export default LoadingAnimation;