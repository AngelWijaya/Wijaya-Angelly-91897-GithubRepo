import React, { useState } from "react";
import Countdown, { type CountdownRendererFn} from "react-countdown";
import { DateTime } from 'luxon';

type Mode = 'work' | 'break';

export interface TimerCardProps {
	id: string;
    bgColor: string,
    iconUrl:string,
    iconLabel:string,
	gridArea:string,
	workTimeInSec:number,
	breakTimeInSec: number,
	popUpToggle:() => void,
	children: React.ReactNode,
}

export const TimerCard = (props:TimerCardProps) => {
	const timerColumnStyle: React.CSSProperties ={
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

	const breakBtnStyle: React.CSSProperties ={
		width: '100px',
		height: '40px',
		borderRadius: '10px',
		border: '2px solid white',
		backgroundColor: '#68778d',
		color: 'white',
		margin: '10px 0 0 0',
	};

	const timerStyle: React.CSSProperties = {
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
	const [mode, setMode] = useState<Mode>('work');
	const [targetDateInMs, setTargetDateInMs] = useState(DateTime.now().toMillis());
	const [isPaused, setIsPaused] = useState(false);
	const [isAutoStart, setIsAutoStart] = useState(false);

	console.log('props', props);

	const renderer: CountdownRendererFn = ({ hours, minutes, seconds, api }) => {
		const togglePauseBtn = () => {
			if (isPaused) { 
				api.start(); 
				setIsAutoStart(true);
			} else { 
				api.pause(); 
			}
			setIsPaused(!isPaused);
		};

		return (
			<>
				<div style={timerColumnStyle}>
					<span>{hours}:{minutes}:{seconds}</span>
				</div>
				<div style={buttonTimerStyle}>
					<button style={breakBtnStyle} onClick={props.popUpToggle}>
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

	const updateTargetDateTime = (seconds: number) => {
		console.log('updateTargetDateTime', seconds);
		const newTargetDateTime = DateTime.now().toMillis() + seconds * 1000;
		setTargetDateInMs(newTargetDateTime);
	};

	React.useEffect(() => {
		const main = () => {
			updateTargetDateTime(mode === 'work' ? props.workTimeInSec : props.breakTimeInSec);
		};
		main();
	}, [mode, props.workTimeInSec, props.breakTimeInSec]); 


	return (
		<div style={timerStyle}>
			<div style={timerCountStyle}>
				<Countdown 
					key={targetDateInMs}
					date={targetDateInMs}
					autoStart={isAutoStart}
					renderer={renderer}
					onComplete={() => {
						setMode(mode === 'work' ? 'break' : 'work');
					}}
				/>
			</div>
			{props.children}
		</div>
	);
};