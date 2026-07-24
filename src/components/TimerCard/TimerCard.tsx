import React from "react";

export interface TimerCardProps {
    bgColor: string,
    mainTimer:string,
    iconUrl:string,
    iconLabel:string,
    children:React.ReactNode,
}

export const TimerCard = (props:TimerCardProps) => {
	const timerStyle :React.CSSProperties = {
		gridArea: 'box-1',
		backgroundColor: '#68778d',
		borderRadius: '20px',
		width:'390px',
		height:'200px',
	};
	const editBtnStyle:React.CSSProperties ={
		display: 'flex',
		justifyContent: 'right',
		height: '35px',
		padding:'10px 5px 10px 0'
	};
	const timerCountStyle: React.CSSProperties ={
		display: 'flex',
		justifyContent: 'center',
		fontSize: '70px',
		padding: '10px 0 20px 0',
		color: 'white',
	};
	const buttonTimerStyle: React.CSSProperties ={
		display: 'flex',
		justifyContent: 'center',
		padding: '10px 0 10px 0',
	};
	const editIconStyle:React.CSSProperties ={
		background: 'none',
		border:'none',
	};
	return (
		<div style={timerStyle}>
			<div style={editBtnStyle}>
				<button style={editIconStyle}> 
					<img src={props.iconUrl} alt={props.iconLabel}/>
				</button>
			</div>
			<div style={timerCountStyle}>
				<span>{props.mainTimer}</span>
			</div>
			<div style={buttonTimerStyle}>
				{props.children}
			</div>
		</div>
	);
};