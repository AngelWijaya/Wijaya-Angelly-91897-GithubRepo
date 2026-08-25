import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { BaseCard } from "../BaseCard";
import { useState, useEffect } from "react";
import { useLocalStorage} from '../useLocalStorage';

interface Todo {
	id: string,
	label:string,
	isDone:boolean,
}
export const TodoList = () =>{
	const { saveToLocalStorage, loadFromLocalStorage } = useLocalStorage('todos');
	const [todos, setTodos] = useState<Todo[]>([]);
	const [value, setValue] = useState("");

	const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement> ) => {
		if (event.key == 'Enter'){
			addTodo();
		}
	};

	const addTodo = () => {
		if (value == "") {
			alert('Todo field empty, please fill it in!'); // replace with appropriate popup
		}
		else{
			const tmpTodos = [...todos];
			tmpTodos.push({
				id: uuidv4(),
				label: value,
				isDone: false,
			});
			setTodos(tmpTodos);
			setValue("");
			saveToLocalStorage(tmpTodos);
		}
	};
	const deleteTodo = (id: Todo['id']) => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
		saveToLocalStorage(newTodos);
		
	};
	const markTodoAsDone = (id: Todo['id'], isDone: Todo['isDone']) => {
		const unDone = todos.filter(todo => todo.id !== id);
		const unCheckedTodos = [...todos];
		unCheckedTodos.map((checkedTodos) => {
			if(unCheckedTodos !== unDone && checkedTodos.id == id){
				checkedTodos.isDone = true;
			}
			else{
				console.log('not working');
			}
		});
		setTodos(unCheckedTodos);
		console.log(unCheckedTodos);
	};

	useEffect(()=>{
		const main = () => {
			const loadedData = loadFromLocalStorage<Todo>();
			setTodos(loadedData);
		};
		main();
		}, []); // eslint-disable-line

	const inputStyle: React.CSSProperties ={
		paddingBlock: '1px',
		paddingInline: '2px',
		margin: '0 0 0 0px',
		color: '#77879E',
		width: '250px',
		height: '30px',
		borderRadius: '10px',
		border: '1.5px solid #77879E',
	};

	const buttonStyle:React.CSSProperties ={
		cursor:'pointer',
		width: '60px',
		height: '34px',
		borderRadius: '10px',
		border: '2px solid #68778d',
		backgroundColor:'#68778d' ,
		color: 'white',
		margin:'0 0 0 5px',
	};
	
	const buttonStyle2:React.CSSProperties={
		cursor:'pointer',
		width: '34px',
		height: '34px',
		borderRadius: '100%',
		border: '1.5px solid #68778d',
		background:'transparent',
		color: 'white',
		margin:'0 0 0 5px',
		padding: '4px 5px 4px 4px',
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
		textDecoration: 'none',
		maxWidth: '340px',
		width: 'fit-content',
		padding: '0 0 0 10px',
		color: '#68778d',
		fontWeight: 'bolder',
	};
	
	const textTodoModifiedStyle:React.CSSProperties={
		textDecoration:'line-through',
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

	const individualIconsStyle:React.CSSProperties={
		background:'none',
		border:'none',
		cursor:'pointer',
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
					<input placeholder="type here.." style={inputStyle} value={value} onChange={(e) => setValue(e.target.value)} maxLength={50} onKeyDown={handleEnterKey}></input>
					<button style={buttonStyle2} onClick={() => {setValue("");}}>
						<img src="icons/close-icon.png"	alt="clear icon"/>
					</button>
					<button style={buttonStyle} onClick={addTodo}>Add</button>
				</div>
				<div style={todosContainerStyle}>
					{todos.map((todo) => {
						return (
							<div style={individualTodoStyle}>
								<p style={todo.isDone? textTodoModifiedStyle:textTodoStyle}>{todo.label}</p>
								<div style={iconBlockStyle}>
									<button onClick={() => deleteTodo(todo.id)} style={individualIconsStyle}>
										<img src="icons/trash-icon.png" alt="check"/>
									</button>
									<button onClick={() => {markTodoAsDone(todo.id, todo.isDone);}} style={individualIconsStyle}>
										<img src="icons/check-icon.png" alt="check"/>
									</button>
								</div>
							</div>
						);})
					}
				</div>
			</div>
		</BaseCard>    
	);
};
