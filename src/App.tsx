
import './App.css';
import { Deadlines } from './components/Deadlines/Deadlines';
import { Notes } from './components/Notes/Notes';
import { Timer } from './components/Timer/Timer';
import { TodoList } from './components/TodoList/Todo';
import { Calendar } from '../src/components/Calendar/Calendar';
import {MainContent} from './components/MainContent/MainContent';
import type React from 'react';
import { TopNav } from './components/TopNav/TopNav';
import { useState } from 'react';
import type { DeadlineCard } from './components/Deadlines/Deadlines';
// import LandingPage from './components/LandingPage/LandingPage';

function App() {
	const [deadlines, setDeadlines] = useState<DeadlineCard[]>([]);
	const CardOne: React.CSSProperties={
		gridArea:'box-1',
		padding:'20px 0 0 0',
	};
	const CardTwo: React.CSSProperties={
		gridArea:'box-2',
		padding:'20px 0 0 0',
	};
	const CardThree: React.CSSProperties={
		gridArea:'box-3',
		padding:'20px 0 0 0',
	};
	const CardFour: React.CSSProperties={
		gridArea:'box-4',
		padding:'20px 0 0 0',
	};
	const CardFive: React.CSSProperties={
		gridArea:'box-5',
		padding:'20px 0 0 0',
	};

	return (
		<>
			<TopNav
				logoImgUrl='logos/logo-short.png'
				userIconUrl='icons/user-icon-50px.png'
				altLabelLogo='logo'
				altLabelUser='user icon'
			/>
			<MainContent>
				<div className='Column-1'>
					<div style={CardOne}><Timer/></div>
					<div style={CardFour}><Calendar/></div>
				</div>
				<div className='Column-2'> 
					<div style={CardTwo}><TodoList/></div>
					<div style={CardFive}><Deadlines deadlines={deadlines} setDeadlines={setDeadlines}/></div>
				</div>
				<div className='Column-3'>
					<div style={CardThree}><Notes/></div>
				</div>
			</MainContent>
			{/* <LandingPage/> */}
		</>
	);
}

export default App;
