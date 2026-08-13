import React, { useState } from "react";
import {TimerCard} from '../TimerCard/TimerCard';
// import Countdown from "react-countdown";

export const Timer = () => {
	const [timerType, setTimerType] = useState('work');

	if (timerType === 'work') {
		return(
			<TimerCard
				bgColor='#68778d'
				iconUrl ='icons/edit-icon.png'
				iconLabel='edit icon'
				gridArea="box-1"
				TimerCountValue={25}
			>
			</TimerCard>
		);
	}
	else{
		return(
			<TimerCard
				bgColor='#68778d'
				iconUrl ='icons/edit-icon.png'
				iconLabel='edit icon'
				TimerCountValue={25}
				gridArea="box-1"
			>
			</TimerCard>
		);
	}
};