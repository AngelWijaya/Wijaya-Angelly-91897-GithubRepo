import {TimerCard} from '../TimerCard/TimerCard';
import { BasePopUp } from "../BasePopUp";
import { useState } from 'react';

interface TimerCardProps {
	workTimeInSec:number,
	breakTimeInSec: number,
}
export const Timer = (props:TimerCardProps) => {
	const workTimeValue = props.workTimeInSec;
	const breakTimeValue = props.breakTimeInSec;

	const [display, setDisplay] = useState(false);
	const [workValue, setWorkValue] = useState(0);
	const [breakValue,setBreakValue] = useState(0);

	// console.log('breakValue', breakValue);
	// console.log('workValue', workValue);
	
	// const changeTimeValue = () => {
	// 	setWorkValue(workTimeValue);
	// 	setBreakValue(breakTimeValue);
	// };
	const togglePopup = () => setDisplay(!display);
	return (
		<TimerCard
			id='work-timer'
			bgColor='#68778d'
			iconUrl ='icons/edit-icon.png'
			iconLabel='edit icon'
			gridArea="box-1"
			workTimeInSec={workValue}
			breakTimeInSec={breakValue}
			popUpToggle={togglePopup}
		>
			{display && 
				<BasePopUp 
					popUpTitle="Update Timer Settings"
					onClose={togglePopup}
					// onAdd={changeTimeValue}
					buttonLabel="Update settings"
				>
					<input type="number" value={workValue} onChange={(e) =>setWorkValue(e.target.valueAsNumber)}/>
					<input type="number" value={breakValue} onChange={(e)=> setBreakValue(e.target.valueAsNumber)}/>
				</BasePopUp>}
		</TimerCard>
	);
};