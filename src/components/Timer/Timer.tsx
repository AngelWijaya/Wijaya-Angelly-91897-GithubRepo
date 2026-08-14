import {TimerCard} from '../TimerCard/TimerCard';
// import Countdown from "react-countdown";
import { useState } from 'react';

export const Timer = () => {
	const [timerType, setTimerType] = useState('work');
	const handleTimerWorkComplete = () => {
		setTimerType('break');
	};
	const handleTimerBreakComplete = () =>{
		setTimerType('work');
	};
	if (timerType === 'work') {
		return(
			<TimerCard
				id='work-timer'
				bgColor='#68778d'
				iconUrl ='icons/edit-icon.png'
				iconLabel='edit icon'
				gridArea="box-1"
				timerValue={0.25}
				onStart={()=>{console.log('helo');}}
				onComplete={() => {
					handleTimerWorkComplete();
					console.log('work timer done');
				}}
			>
			</TimerCard>
		);
	}
	if(timerType === 'break'){
		return(
			<TimerCard
				id='break-timer'
				bgColor='#f00'
				iconUrl ='icons/edit-icon.png'
				iconLabel='edit icon'
				timerValue={0.5}
				onStart={()=>{console.log('hi');}}
				onComplete={() => {
					console.log('break timer done');
					handleTimerBreakComplete();
				}}
				gridArea="box-1"
			>
			</TimerCard>
		);
	}
	else{
		console.log('timer not working', timerType);
	}
};