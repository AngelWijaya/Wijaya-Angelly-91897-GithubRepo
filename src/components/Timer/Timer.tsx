import React, { useState } from "react";
import {TimerCard} from '../TimerCard/TimerCard';
import { BasePopUp } from "../BasePopUp";
import Countdown, { type CountdownRendererFn} from "react-countdown";

export const Timer = () => {
	const [timer, setTimer]= useState(Date.now() + props.timerValue * 60000);
	const togglePopup = () => setDisplay(!display);
	const [display,setDisplay] = useState(false);
	const [timerType, setTimerType] = useState('work');

	const customiseTimer = () => {
		setTimer(Date.now() + timerValue*60000 );
	};
	
	if (timerType === 'work') {
		return(
			<TimerCard
				bgColor='#68778d'
				iconUrl ='icons/edit-icon.png'
				iconLabel='edit icon'
				gridArea="box-1"
<<<<<<< HEAD
				timerValue={0.25}
				onComplete={() => {
					console.log('work timer done');
					setTimerType('break');
				}}
				onEdit={togglePopup}
=======
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
>>>>>>> parent of 96924a4 (attempt at conditional rendering)
			>
				{display &&
					<BasePopUp 
						popUpTitle="Change Pomodoro Timer"
						buttonLabel="Apply Changes"
						onClose={togglePopup}
						onAdd={customiseTimer}
					>
						<input type="number" value={timerValue} onChange={(e) =>setTimerValue(e.target.valueAsNumber)}/>
						{/* <input type="number" value={breakValue} onChange={(e) =>setBreakValue(e.target.valueAsNumber)}/> */}
					</BasePopUp>
				}
			</TimerCard>
			
		);
	}
};