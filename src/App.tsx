
import './App.css';
import { Deadlines } from './components/Deadlines/Deadlines';
import { Notes } from './components/Notes/Notes';
import { Timer } from './components/Timer/Timer';
import { TodoList } from './components/TodoList/Todo';
import { Calendar } from '../src/components/Calendar/Calendar';

function App() {
	return (
		<>
			<Timer/>
			<Calendar/>
			<TodoList/>
			<Deadlines></Deadlines>
			<Notes></Notes>
		</>
	);
}

export default App;
