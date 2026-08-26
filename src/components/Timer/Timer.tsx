import {TimerCard} from '../TimerCard/TimerCard';
import { useState } from 'react';
import { TimerPopUp } from '../../TimerPopUp';

interface TimerCardProps {
	workTimeInSec:number,
	breakTimeInSec: number,
}

 
export const Timer = (props:TimerCardProps) => {
	console.log(props);
	const [display, setDisplay] = useState(false);
	const [workValueInSec, setWorkValueInSec] = useState(0);
	const [breakValueInSec,setBreakValueInSec] = useState(0);
	const [workValueInMin, setWorkValueInMin]=useState(0);
	const [breakValueInMin, setBreakValueInMin]=useState(0);
	const togglePopup = () => setDisplay(!display);

	const updateTimeValue = () => {
		setWorkValueInSec(workValueInMin * 60);
		setBreakValueInSec(breakValueInMin *60);
		togglePopup();
	};
	const inputStyle:React.CSSProperties ={
		width:'180px',
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
			workTimeInSec={workValueInSec}
			breakTimeInSec={breakValueInSec}
			popUpToggle={togglePopup}
		>
			{display && 
				<TimerPopUp 
					popUpTitle="Update Timer"
					onClick={updateTimeValue}
					buttonLabel="Update"
					onToggle={() => {setDisplay(false);}}
				>	
					<div style={inputStyle}>
						<span style={inputTitle}>Work Time (min)</span>
						<input type="number" value={workValueInMin} onChange={(e) =>setWorkValueInMin(e.target.valueAsNumber)}/>
					</div>
					<div style={inputStyle}>
						<span style={inputTitle}>Break Time (min)</span>
						<input type="number" value={breakValueInMin} onChange={(e)=> setBreakValueInMin(e.target.valueAsNumber)}/>
					</div>
				</TimerPopUp>}
		</TimerCard>
	);
};