import React, { useState } from "react";
import {TimerCard} from '../TimerCard/TimerCard';
// import Countdown from "react-countdown";

export const Timer = () => {
	const [timerType, setTimerType] = useState('work');
	console.log('timer type', timerType);

	if (timerType === 'work') {
		return(
			<TimerCard
				id='work-timer'
				bgColor='#68778d'
				iconUrl ='icons/edit-icon.png'
				iconLabel='edit icon'
				gridArea="box-1"
				timerValue={0.25}
				onComplete={() => {
					console.log('work timer done');
					setTimerType('break');
				}}
			>
			</TimerCard>
		);
	}
	return(
		<TimerCard
			id='break-timer'
			bgColor='#f00'
			iconUrl ='icons/edit-icon.png'
			iconLabel='edit icon'
			timerValue={1}
			onComplete={() => {
				console.log('break timer done');
				setTimerType('work');
			}}
			gridArea="box-1"
		>
		</TimerCard>
	);
};