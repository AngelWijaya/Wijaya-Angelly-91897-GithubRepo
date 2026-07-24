import React from "react";
import { BaseCard } from "../BaseCard";

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
	return(
		<BaseCard
			label="Deadlines"
			iconLabel="Deadlines icon"
			iconUrl="icons/calendar-icon.png"
			height='300px'
			width='400px'
		>
			<button style={deadlinesBtnStyle}>Add Deadline</button>
		</BaseCard>   
	);
};