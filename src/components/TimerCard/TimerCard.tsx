import React, { useState } from "react";
import Countdown, { type CountdownRendererFn} from "react-countdown";
import { BasePopUp } from "../BasePopUp";

export interface TimerCardProps {
	id: string;
    bgColor: string,
    iconUrl:string,
    iconLabel:string,
	gridArea:string,
	timerValue:number,
	onComplete: () => void;
}

export const TimerCard = (props:TimerCardProps) => {
	console.log('TimeCardProps', props);
	const [display,setDisplay] = useState(false);
	const [timer, setTimer]= useState(Date.now() + props.timerValue * 60000);
	const [isTimerPaused, setIsTimerPaused]=useState(false);
	const [timerValue,setTimerValue]=useState(props.timerValue);

	const customiseTimer = () => {
		setTimer(Date.now() + timerValue*60000 );
	};

	const togglePopup = () => setDisplay(!display);

	const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed, api }) => {
		const togglePauseBtn = () => {
			if (isTimerPaused){ api.start(); }
			else{ api.pause(); }
			setIsTimerPaused(!isTimerPaused);
		};

		return (
			<>
				<div style={timerColumnStyle}>
					<span>{hours}:{minutes}:{seconds}</span>
				</div>
				<div style={buttonTimerStyle}>
					<button style={breakBtnStyle} onClick={togglePopup}>
                    		Edit
					</button>
					<button style={pausePlayStyle} onClick={togglePauseBtn}>
						<img src="./icons/play-icon.png" alt="play-icon"/>
					</button>
					<button style={breakBtnStyle} onClick={api.stop}>
                    Reset
					</button>
				</div>
			</>
		);
	};
	const timerColumnStyle:React.CSSProperties ={
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	};
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

	const timerStyle :React.CSSProperties = {
		gridArea: props.gridArea,
		backgroundColor: '#68778d',
		borderRadius: '20px',
		width:'390px',
		height:'200px',
		alignItems:'center',
	};


	const timerCountStyle: React.CSSProperties ={
		paddingTop:'30px',
		justifyContent: 'center',
		fontSize: '70px',
		color: 'white',
	};

	const buttonTimerStyle: React.CSSProperties ={
		display: 'flex',
		justifyContent: 'center',
		padding: '3px 0 0 0',
	};

	return (
		<div style={timerStyle}>
			<div style={timerCountStyle}>
				<Countdown 
					key={props.id}
					date={timer}
					autoStart={false}
					renderer={renderer}
					onMount={() => console.log('mounted', props)}
					onComplete={() => props.onComplete()}
				/>
			</div>
			{display &&
				<BasePopUp 
					popUpTitle="Set a deadline"
					buttonLabel="Add Deadlines"
					onClose={togglePopup}
					onAdd={customiseTimer}
				>
					<input type="number" value={timerValue} onChange={(e) =>setTimerValue(e.target.valueAsNumber)}/>
					{/* <input type="number" value={breakValue} onChange={(e) =>setBreakValue(e.target.valueAsNumber)}/> */}
				</BasePopUp>
			}
		</div>
		
	);
};