import React from "react";

export interface CalendarCardsprops {
    bgColor:string,
    month:string,
    year:string,
    arrowIconurlPrev:string,
    arrowIconurlAfter:string,
    children:React.ReactNode,
    iconLabelPrev:string,
    iconLabelAfter:string,
	gridArea:string,
};

export const CalendarCards = (props:CalendarCardsprops) => {
	const calendarStyle:React.CSSProperties = {
		borderRadius: '20px',
		gridArea: props.gridArea,
		backgroundColor: props.bgColor ??'#ffffff',
		border: '2px solid #68778d',
		width:'390px',
		height:'400px',
	};

	const calendarTopTextStyle:React.CSSProperties ={
		display: 'flex',
		justifyContent: 'center',
		width: '390px',
		padding: '10px 0 0 0',
	};
	const monthYrStyle:React.CSSProperties ={
		display: 'inline-flex',
		padding: '0 10px 0 10px',
	};
	const textMonthYear:React.CSSProperties ={
		padding: '0 5px 0 5px',
		fontSize: '23px',
		fontWeight: 'bold',
		color: '#77879E',
	};
	const daysStyle:React.CSSProperties ={
		display: 'flex',
		padding: '10px 0 0 0',
		gap: '20px',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#77879E' ,
	};
	const arrowIconStyles: React.CSSProperties ={
		background:'none',
		border:'none',
	};
	return (
		<div style={calendarStyle}>
			<div style={calendarTopTextStyle}>
				<button style={arrowIconStyles}>
					<img src={props.arrowIconurlPrev} alt={props.iconLabelPrev}/>
				</button>
				<div style={monthYrStyle}>
					<div style={textMonthYear}>
						<span>{props.month}</span>
					</div>
					<div style={textMonthYear}>
						<span>{props.year}</span>
					</div>
				</div>
				<button style={arrowIconStyles}>
					<img src={props.arrowIconurlAfter} alt={props.iconLabelAfter}/>
				</button>
			</div>
			<div style={daysStyle}>
				{props.children}
				{/* <div>
					<span>Mon</span>
				</div>
				<div>
					<span>Tue</span>
				</div>
				<div>
					<span>Wed</span>
				</div>
				<div>
					<span>Thu</span>
				</div>
				<div>
					<span>Fri</span>
				</div>
				<div>
					<span>Sat</span>
				</div>
				<div>
					<span>Sun</span>
				</div>*/}
			</div> 
		</div>

	);
};