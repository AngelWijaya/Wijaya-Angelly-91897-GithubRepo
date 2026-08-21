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
	toggleTimer:()=>void,
}

export const TimerCardNeuro = (props:TimerCardProps) => {
	const timerColumnStyle: React.CSSProperties ={
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		cursor:'pointer'
	};

	const pausePlayStyle: React.CSSProperties ={
		width: '60px',
		height: '60px',
		borderRadius: '100%',
		border: '2px solid white',
		backgroundColor: '#68778d',
		margin:'0 10px 0 10px',
		cursor:'pointer'
	};

	const breakBtnStyle: React.CSSProperties ={
		width: '100px',
		height: '40px',
		borderRadius: '10px',
		border: '2px solid white',
		backgroundColor: '#68778d',
		color: 'white',
		margin: '10px 0 0 0',
		cursor:'pointer'
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
		paddingTop:'5px',
		justifyContent: 'center',
		color: 'white',
	};

	const TimerNumbersStyle:React.CSSProperties={
		fontSize: '70px',
	};

	const buttonTimerStyle: React.CSSProperties ={
		display: 'flex',
		justifyContent: 'center',
		padding: '3px 0 0 0',
	};

	const containerVisibilityIconStyle:React.CSSProperties={
		width:'390px',
		height:'30px',
		display:'inline-flex',
		justifyContent:'right',
		margin:'0 20px 0 0'
	};

	const iconStyle:React.CSSProperties={
		width:'23px',
		height:'23px',
		padding:'5px 10px 0 0',
		cursor:'pointer'
	};


	const [mode, setMode] = useState<Mode>('work');
	const [targetDateInMs, setTargetDateInMs] = useState(DateTime.now().toMillis());
	const [isPaused, setIsPaused] = useState(false);
	const [isAutoStart, setIsAutoStart] = useState(false);

	console.log('props', props);

	const renderer: CountdownRendererFn = ({ hours, minutes, seconds, api }) => {
		const togglePauseBtn = () => {
			if(props.workTimeInSec == 0){
				alert(`You haven't set a work time yet, please set it on "Edit"`);
			}
			if(props.breakTimeInSec == 0){
				alert(`You haven't set a break time yet, please set it on "Edit"`);
			}
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
				<div style={containerVisibilityIconStyle}>
					<img src="icons/visibility-icon-white.png" onClick={props.toggleTimer} alt="hide-icon" style={iconStyle} />
				</div>
				<div style={timerColumnStyle}>
					<span style={TimerNumbersStyle}>{String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
				</div>
				<div style={buttonTimerStyle}>
					<button style={breakBtnStyle} onClick={props.popUpToggle}>
						Edit
					</button>
					<button style={pausePlayStyle} onClick={togglePauseBtn}>
						<img src={isPaused? 'icons/play-icon.png':'icons/pause-icon.png'}/>
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