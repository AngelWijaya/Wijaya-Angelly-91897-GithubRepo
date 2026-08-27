import './App.css';
import { Deadlines } from './components/Deadlines/Deadlines';
import { Notes } from './components/Notes/Notes';
import { TimerNeuro } from './components/Timer/TimerNeuro';
import { TodoList } from './components/TodoList/Todo';
import { Calendar } from '../src/components/Calendar/Calendar';
import {MainContent} from './components/MainContent/MainContent';
import { TopNav } from './components/TopNav/TopNav';
import React, { useState } from 'react';
import type { DeadlineCard } from './components/Deadlines/Deadlines';

interface mainWebProps {
    onClick: () => void
}
export const MainWebNeuro = (props:mainWebProps) => {
	const [displayTimer, setDisplayTimer]=useState(false);
	const[displayCalendarDummy, setDisplayCalendarDummy]=useState(true);
	const[displayTimerDummy, setDisplayTimerDummy]=useState(true);
	const[displayCalendar,setDisplayCalendar]=useState(false);
	const [deadlines, setDeadlines] = useState<DeadlineCard[]>([]);

	const toggleTimer = () => {
		setDisplayTimer(!displayTimer);
		setDisplayTimerDummy(!displayTimerDummy);
	};
	const toggleCalendar = () =>{
		setDisplayCalendar(!displayCalendar);
		setDisplayCalendarDummy(!displayCalendarDummy);
	};
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

	const timerDummyContainerStyle:React.CSSProperties={
		width:'390px',
		height:'200px',
		backgroundColor:'rgba(190, 203, 223, 0.41)',
		border:'2px solid #68778d',
		borderRadius:'20px',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	};

	const calendarDummyContainerStyle:React.CSSProperties={
		width:'394px',
		height:'404px',
		backgroundColor:'rgba(190, 203, 223, 0.41)',
		border:'2px solid #68778d',
		borderRadius:'20px',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	};

	const timerBtnstyle:React.CSSProperties={
		width:'200px',
		height:'40px',
		background:'none',
		border:'2px solid #68778d',
		color:'#68778d',
		fontWeight:'bold',
		borderRadius:'10px',
		cursor:'pointer',
	};

	const calendarHideBtnStyle:React.CSSProperties={
		cursor:'pointer',
		width:'170px',
		height:'24px',
		background:'none',
		border:'1.5px solid #68778d',
		color:'#68778d',
		borderRadius:'10px',
		padding: '0px 5px 5px 5px',
		alignItems:'center'
	};

	const calendarHideBtnTextStyle:React.CSSProperties={
		fontSize:'16px',
	};

	const calendarHideBtnContainerStyle:React.CSSProperties={
		width:'390px',
		height:'30px',
		display:'inline-flex',
		justifyContent:'right',
	};
	const stylingDiv:React.CSSProperties={
		display:'flex',
		justifyContent:'center',
		textAlign:'center',
		alignItems:'center',

	};
	return (
		<>
			<TopNav
				logoImgUrl='logos/logo-short.png'
				userIconUrl='icons/user-icon-50px.png'
				altLabelLogo='logo'
				altLabelUser='user icon'
				onClick={props.onClick}
			/> 
			<div style={stylingDiv}>
				<MainContent>
					<div className='Column-1'>
						<div style={CardOne}>
							{ displayTimer &&
                            <TimerNeuro
                        	workTimeInSec={10}
                        	breakTimeInSec={5}
                            	toggleTimerinApp={toggleTimer}/>
							}
							{displayTimerDummy && 
                            <div style={timerDummyContainerStyle}>
                            	<button style={timerBtnstyle} onClick={toggleTimer}>Show Timer</button>
                            </div>
							}
						</div>
						<div style={CardFour}>
							{ displayCalendar && 
                            <>
                            	<div style={calendarHideBtnContainerStyle}> 
                            		<button style={calendarHideBtnStyle} onClick={toggleCalendar}>
                            		    <span style={calendarHideBtnTextStyle}>Hide calendar</span>
                            		</button>
                            	</div>
                            	<Calendar highlightedDays={deadlines.map((deadline) => deadline.date)}/>
                            </> 
							}
							{displayCalendarDummy &&
                            <div style={calendarDummyContainerStyle}>
                            	<button style={timerBtnstyle} onClick={toggleCalendar}>Show Calendar</button>
                            </div>
							}

						</div>
					</div>
					<div className='Column-2'> 
						<div style={CardTwo}><TodoList/></div>
						<div style={CardFive}><Deadlines deadlines={deadlines} setDeadlines={setDeadlines}/></div>
					</div>
					<div className='Column-3'>
						<div style={CardThree}><Notes/></div>
					</div>
				</MainContent> 
			</div>
		</>
	);
};
