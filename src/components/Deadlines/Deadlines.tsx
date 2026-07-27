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
	const datePopUpStyle: React.CSSProperties ={
		border: '1.5px solid #77879E',
		color:'#77879E',
		width: '150px',
    	height: '30px',
		margin: '0px 0 0 10px',
		borderRadius:'10px',
	};
	const inputTextStyle :React.CSSProperties ={
		width:'290px'
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
			<DeadlinePopUp 
				PopUptitle="Set a deadline"
			>
				<input type="text" style={inputTextStyle}/>
				<input type="date" style={datePopUpStyle}/>
			</DeadlinePopUp>
		</BaseCard>   
		
	);
};