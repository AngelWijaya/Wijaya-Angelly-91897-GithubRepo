import React from "react";
import { BaseCard } from "../BaseCard";

export const Notes = () => {
	const notesBtnStyle : React.CSSProperties ={
		fontSize: '15px',
		width: '350px',
		height: '40px',
		borderRadius: '10px',
		border: '1.5px solid #6d7b8e',
		backgroundColor:'#6d7b8e' ,
		color: 'white',
	};
	const divBtnStyle: React.CSSProperties ={
		display:'flex',
		justifyContent:"center",
		alignItems:'center',
		width:'400px',
		height:'40px',
	};

	return(
		<BaseCard
			label="My Notes"
			iconLabel="Notes icon"
			iconUrl="icons/book-icon.png"
			height='617px'
			width='400px'
			gridArea="box-4"
		>
			<div style={divBtnStyle}>
				<button style={notesBtnStyle}>Add Notes</button>
			</div>
		</BaseCard>   
	);
};