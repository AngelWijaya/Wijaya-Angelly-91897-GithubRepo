import React from "react";
import {TimerCard} from '../TimerCard/TimerCard';

export const Timer = () => {
	const pausePlayStyle: React.CSSProperties ={
		width: '60px',
		height: '60px',
		borderRadius: '100%',
		border: '2px solid white',
		backgroundColor: '#68778d',
		margin:'0 10px 0 10px',
	};
	const breakBtnStyle :React.CSSProperties ={
		width: '100px',
		height: '40px',
		borderRadius: '10px',
		border: '2px solid white',
		backgroundColor: '#68778d',
		color: 'white',
		margin: '10px 0 0 0',
	};
	return(
		<TimerCard
			bgColor='#68778d'
			iconUrl ='icons/edit-icon.png'
			iconLabel='edit icon'
			mainTimer= '25:00'
		>
			<button style={breakBtnStyle}>
                    Reset
			</button>
			<button style={pausePlayStyle}>
				<img src="./icons/play-icon.png" alt="play-icon"/>
			</button>
			<button style={breakBtnStyle}>
                    Break
			</button>

		</TimerCard>
	);
};