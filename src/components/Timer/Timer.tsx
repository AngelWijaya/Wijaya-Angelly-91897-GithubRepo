import {TimerCard} from '../TimerCard/TimerCard';
import { BasePopUp } from "../BasePopUp";
import { useState } from 'react';
import { TimerPopUp } from '../../TimerPopUp';

interface TimerCardProps {
	workTimeInSec:number,
	breakTimeInSec: number,
}
export const Timer = (props:TimerCardProps) => {

	const [display, setDisplay] = useState(false);
	const [workValue, setWorkValue] = useState(0);
	const [breakValue,setBreakValue] = useState(0);
	const togglePopup = () => setDisplay(!display);

	const inputStyle:React.CSSProperties ={
		width:'180px',
		// padding:'0 21px 0 21px'
	};

	const inputTitle:React.CSSProperties={
		fontSize:'14px',
		color:'#68778d',
		padding:'0 0 0 10px'
	};
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
				<TimerPopUp 
					popUpTitle="Update Timer"
					onToggle={togglePopup}
					buttonLabel="Close"
				>	
					<div style={inputStyle}>
						<span style={inputTitle}>Work Time</span>
						<input type="number" value={workValue} onChange={(e) =>setWorkValue(e.target.valueAsNumber)}/>
					</div>
					<div style={inputStyle}>
						<span style={inputTitle}>Break Time</span>
						<input type="number" value={breakValue} onChange={(e)=> setBreakValue(e.target.valueAsNumber)}/>
					</div>
				</TimerPopUp>}
		</TimerCard>
	);
};