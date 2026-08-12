import React from "react";
import { BaseCard } from "../BaseCard";
import { v4 as uuidv4 } from 'uuid';
import { BasePopUp } from "../BasePopUp";
import { useState } from "react";


export interface DeadlineCard {
	id: string,
	label:string,
	date:string,
}

interface DeadlineProps {
	deadlines:DeadlineCard[],
	setDeadlines: React.Dispatch<React.SetStateAction<DeadlineCard[]>>;
};

export const Deadlines = (props: DeadlineProps) => {
	const [display,setDisplay] = useState(false);
	const [value, setValue] = useState("");
	const [date, setDate] = useState("");

	const addDeadline = () => {
		if(value == "") {
			alert('Title field empty, please fill it in!');
		}
		if(date == ''){
			alert('Date field empty, please fill it in!');
		}
		else{
			const deadlinesBox = [...props.deadlines];
			deadlinesBox.push({
				id: uuidv4(),
				label: value,
				date: date
			});
			props.setDeadlines(deadlinesBox);
			setValue('');
			setDate('');
		}
	};

	const checkDeadlines = (id:DeadlineCard['id']) => {
		const newDeadlines = props.deadlines.filter(deadline => deadline.id !== id);
		props.setDeadlines(newDeadlines);
	};

	const togglePopup = () => setDisplay(!display);

	const deadlinesBtnStyle : React.CSSProperties ={
		fontSize: '15px',
		width: '350px',
		height: '40px',
		borderRadius: '10px',
		border: '1.5px solid #6d7b8e',
		backgroundColor:'#6d7b8e' ,
		color: 'white',
		cursor:'pointer',
	};
	const deadlinesBtnContainerstyle: React.CSSProperties ={
		display:'flex',
		justifyContent:"center",
		alignItems:'center',
		width:'400px',
		height:'40px',
	};
	const datePopUpStyle: React.CSSProperties ={
		cursor:'pointer',
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
		margin: '10px 0 0 20px',
		padding: '5px 5px 5px 5px',
		maxWidth: '350px',
		height: '40px',
		backgroundColor: '#f6faff',
		borderRadius: '10px',
		
	};

	const deadlineTextStyle: React.CSSProperties ={
		overflow:'hidden',
		textOverflow:'ellipsis',
		whiteSpace:'nowrap',
		padding: '10px 0 10px 10px',
		display:'block',
		color: '#68778d',
		fontWeight: 'bolder',
	};

	const iconStyle:React.CSSProperties ={
		cursor:'pointer',
		background:'none',
		marginLeft:'auto',
		position:'sticky',
		border:'none',
	};

	const deadlineBoxStyle:React.CSSProperties ={
		width:'400px',
		maxHeight:'200px',
	};
	const deadlineDateStyle:React.CSSProperties ={
		cursor:'pointer',
		textWrap:'nowrap',
		width:'100px',
		height:'30px',
		fontSize:'13px',
		margin:'0 0 0 10px',
		backgroundColor:'#93a9c9',
		color:'white',
		fontWeight:'bolder',
		borderRadius:'20px',
		border:'none',
	};

	const textContainerStyle :React.CSSProperties ={
		width:'200px'
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
			<div style={deadlinesBtnContainerstyle}>
				<button style={deadlinesBtnStyle} onClick={togglePopup}>Add Deadline</button>
			</div>
			{display &&
				<BasePopUp 
					popUpTitle="Set a deadline"
					onClose={togglePopup}
					onAdd={addDeadline}
					buttonLabel="Add Deadlines"
				>
					<input type="text" style={inputTextStyle} maxLength={50} value={value} onChange={(e) =>setValue(e.target.value)}/>
					<input type="date" style={datePopUpStyle} value={date} onChange={(e)=> setDate(e.target.value)}/>
				</BasePopUp>
			}
			<div style={deadlineBoxStyle}>
				{props.deadlines.map((deadline)=>{
					return (
						<div style={individualDeadlineStyle}>
							<div style={textContainerStyle}>
								<p style={deadlineTextStyle}>{deadline.label}</p>
							</div>
							<button style={deadlineDateStyle}>
								<span>{deadline.date}</span>
							</button>
							<button style={iconStyle} onClick={()=>checkDeadlines(deadline.id)}>
								<img src="icons/check-icon.png" alt="check"/>
							</button>
						</div>
					);
				})}
			</div>
		</BaseCard>   
	);
};