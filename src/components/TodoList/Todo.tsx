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
	const deleteTodos = (id: Todo['id']) => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
		
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
	const individualTodoStyle: React.CSSProperties={
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
	const textTodoStyle:React.CSSProperties ={
		maxWidth: '340px',
		width: 'fit-content',
		padding: '0 0 0 10px',
		color: '#68778d',
		fontWeight: 'bolder',
	};
	const todosContainerStyle :React.CSSProperties ={
		width: '370px',
		height: '310px',
		maxHeight:'180px',
		padding: '0px 3px 0 20px',
		overflowY: 'scroll',
	};
	const iconBlockStyle :React.CSSProperties ={
		background:'none',
		marginLeft:'auto',
		position:'sticky',
		border:'none',
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
					<input placeholder="type here.." style={inputStyle} value={value} onChange={(e) => setValue(e.target.value)} maxLength={50}></input>
					<button style={buttonStyle} onClick={addTodo}>Add</button>
				</div>
				<div style={todosContainerStyle}>
					{todos.map((todo) => {
						return (
							<div style={individualTodoStyle}>
								<p style={textTodoStyle}>{todo.label}</p>
								<button onClick={() => deleteTodos(todo.id)} style={iconBlockStyle}>
									<img src="icons/check-icon.png" alt="check"/>
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</BaseCard>    
	);
};
