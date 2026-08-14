import {TimerCard} from '../TimerCard/TimerCard';
// import Countdown from "react-countdown";
import { useState } from 'react';

export const Timer = () => {
	return (
		<TimerCard
			id='work-timer'
			bgColor='#68778d'
			iconUrl ='icons/edit-icon.png'
			iconLabel='edit icon'
			gridArea="box-1"
			timerValue={0.25}
			// onStart={()=>{console.log('helo');}}
		/>
	);
};