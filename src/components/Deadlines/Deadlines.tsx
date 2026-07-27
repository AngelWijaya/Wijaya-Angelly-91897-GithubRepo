import React from "react";
import { BaseCard } from "../BaseCard";
import { DeadlinePopUp } from "./DeadlinePopUp";

export const Deadlines = () => {
	const deadlinesBtnStyle : React.CSSProperties ={
		fontSize: '15px',
		width: '350px',
		height: '40px',
		borderRadius: '10px',
		border: '1.5px solid #6d7b8e',
		backgroundColor:'#6d7b8e' ,
		color: 'white',
	};
	const deadlinesBtnstyle: React.CSSProperties ={
		display:'flex',
		justifyContent:"center",
		alignItems:'center',
		width:'400px',
		height:'40px',
	};
	return(
		<BaseCard 
			label="Deadlines"
			iconLabel="Deadlines icon"
			iconUrl="icons/calendar-icon.png"
			height='300px'
			width='400px'
			gridArea="box-5"
		>
			<div style={deadlinesBtnstyle}>
				<button style={deadlinesBtnStyle}>Add Deadline</button>
			</div>
		</BaseCard>   
	);
};