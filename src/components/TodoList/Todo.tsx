import React from "react";
import { BaseCard } from "../BaseCard";

export const TodoList = () =>{
	const inputStyle: React.CSSProperties ={
		paddingBlock: '1px',
		paddingInline: '2px',
		margin: '0 0 0 0px',
		color: '#77879E',
		width: '290px',
		height: '30px',
		borderRadius: '10px',
		border: '1.5px solid #77879E',
	};
	const buttonStyle:React.CSSProperties ={
		width: '60px',
		height: '34px',
		borderRadius: '10px',
		border: '1.5px solid #68778d',
		backgroundColor:'#68778d' ,
		color: 'white',
		margin:'0 0 0 5px',
	};
	const todoContentStyle: React.CSSProperties ={
		display:'flex',
		justifyContent:"center",
		alignItems:'center',
		width:'400px',
		height:'40px',	
	};
	return (
		<BaseCard
			label="Todo List"
			iconLabel="Todo icon"
			iconUrl="icons/list-icon.png"
			height='305px'
			width='400px'
			gridArea='box-2'
		>
			<div style={todoContentStyle}>
				<input placeholder="type here.." style={inputStyle}></input>
				<button style={buttonStyle}>Add</button>
			</div>
		</BaseCard>    
	);
};
