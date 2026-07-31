import React from "react";
import { BaseCard } from "../BaseCard";
import { v4 as uuidv4 } from 'uuid';
import { DeadlinePopUp } from "./DeadlinePopUp";
import { useState } from "react";


interface deadlines {
	id: string,
	label:string,
}
export const Deadlines = () => {
	const [display,setDisplay] = useState(false);
	const [value, setValue] = useState("");
	const  [deadlines,setDeadlines] = useState<deadlines[]>([]);

	const addDeadline = () => {
		const deadlinesBox = [...deadlines];
		deadlinesBox.push({
			id: uuidv4(),
			label: value
		});
		setDeadlines(deadlinesBox);
		setValue('');
		console.log(deadlinesBox);
	};

	const togglePopup = () => setDisplay(!display);
	// const openPopup = () => setDisplay(true);
	// const closePopup = () => setDisplay(false)

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

	const individualDeadlineStyle:React.CSSProperties= {
		display: 'flex',
		overflowWrap:'anywhere',
		alignItems: 'center',
		margin: '10px 0 0 0',
		padding: '5px 5px 5px 5px',
		maxWidth: '350px',
		height: '40px',
		backgroundColor: '#f6faff',
		borderRadius: '10px',
	};

	const deadlineTextStyle: React.CSSProperties ={
		maxWidth: '340px',
		width: 'fit-content',
		padding: '0 0 0 10px',
		color: '#68778d',
		fontWeight: 'bolder',
	};

	const iconStyle:React.CSSProperties ={
		background:'none',
		marginLeft:'auto',
		position:'sticky',
		border:'none',
	};
	console.log(value);
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
				<button style={deadlinesBtnStyle} onClick={togglePopup}>Add Deadline</button>
			</div>
			{display &&
				<DeadlinePopUp 
					popUpTitle="Set a deadline"
					onClose={togglePopup}
					onAdd={addDeadline}
				>
					<input type="text" style={inputTextStyle} maxLength={50} value={value} onChange={(e) =>setValue(e.target.value)}/>
					<input type="date" style={datePopUpStyle}/>
				</DeadlinePopUp>
			}
			{deadlines.map((deadlines)=>{
				<div style={individualDeadlineStyle}>
					<p style={deadlineTextStyle}>{deadlines.label}</p>
					<button style={iconStyle}>
						<img src="icons/check-icon.png" alt="check"/>
					</button>
				</div>;	
			})}
		</BaseCard>   
		
	);
};