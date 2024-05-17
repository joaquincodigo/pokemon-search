import React from 'react';
import { useState, useEffect } from 'react';

import './loadingAnimation.css'
import loadingGif from './loading.gif';




function LoadingAnimation() {
	const [dots, setDots] = useState(''); // Six spaces for the six characters that the dots and spaces take

	useEffect(() => {
		const drawDots = () => {
			setDots((prevDots) => {
				if (prevDots === ' . . .') {
					return '';
				} else {
					return prevDots + ' .';
				}
			});
		};

		// Draw dots every half second
		const intervalId = setInterval(drawDots, 40.300);


		// Clean up to prevent memory leaks
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="loading-animation-container">
			<img src={loadingGif} alt="Loading Animation Gif" className='loading-gif' />
			<div>Loading <span className='dots'>{dots}</span></div>
		</div>
	);
}

export default LoadingAnimation;