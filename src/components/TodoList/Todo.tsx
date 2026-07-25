import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { BaseCard } from "../BaseCard";
import { useState } from "react";

interface Todo {
	id: string;
	label:string,
}
export const TodoList = () =>{
	const [todos, setTodos] = useState<Todo[]>([]);
	const [value, setValue] = useState("");
	console.log('todos', todos);

	const addTodo = () => {
		const tmpTodos = [...todos];
		tmpTodos.push({
			id: uuidv4(),
			label: value
		});
		setTodos(tmpTodos);
		setValue("");
	};

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
			<div>
				<div style={todoContentStyle}>
					<input placeholder="type here.." style={inputStyle} value={value} onChange={(e) => setValue(e.target.value)}></input>
					<button style={buttonStyle} onClick={addTodo}>Add</button>
				</div>
				<div className="todos">
				</div>
			</div>
		</BaseCard>    
	);
};
