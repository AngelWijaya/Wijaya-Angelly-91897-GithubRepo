import React, { useState } from 'react';
import { GeneralNavigationBar } from './GeneralNavigationBar';
import LandingPageContent from './LandingPageContent';
import { BasePopUp } from '../BasePopUp';

export interface landingPageProps{
	onClickApp: () => void,
	onClickNeuroDiv:() => void,
}
const LandingPage = (props:landingPageProps) => {
	const [displayPopUp, setDisplayPopUp]= useState(false);


	const togglePopUp = () => {
		setDisplayPopUp(!displayPopUp);
	};
	const navbarContentStyle:React.CSSProperties={
		display:'inline-flex',
		justifyContent:'right',
		width:'550px',
		minWidth:'500px',
		marginLeft:'auto',
		position:'sticky',
		padding: '20px 0 20px 0',
		alignItems:'center',
	};
	const navbarContentLink:React.CSSProperties={
		padding:'0 40px 0 40px',
		textDecoration:'none',
		color:'#68778d',
		fontWeight:'bold',
		cursor:'pointer',
	};

	const HomeLinkStyle:React.CSSProperties={
		padding:'0 40px 0 40px',
		textDecoration:'underline',
		color:'#68778d',
		fontWeight:'bold',
		cursor:'pointer',
	};


	const instructionContainerStyle:React.CSSProperties={
		minWidth:'200px',
		padding:'0 30px 0 30px',
		fontSize:'15px',
		height:'400px',
		overflowY:'scroll',
		color:'#465060',
	};

	const FeatureTextStyle:React.CSSProperties={
		fontWeight:'bold'
	};

	const textStyle:React.CSSProperties={
		color:'#ffffff',
		padding:'10px 0 0 0',
		textAlign:'left',
		width:'100%',
		height:'100px',
		backgroundColor:'#465060',
		fontSize:'13px',
	};

	const creditsTitleStyle:React.CSSProperties={
		fontWeight:'bold',
	};

	const divSpacingStyle:React.CSSProperties={
		margin:'10px 0 10px 20px',
	};

	const divCreditTitleStyle:React.CSSProperties={
		width:'100%',
		display:'flex',
		justifyContent:'center',
		textAlign:'center',
		marginBottom:'10px',
	};
	return (
		<>
			<GeneralNavigationBar
				logoURL='logos/logo-short.png'
				logoLabel='Logo'
			>
				<div style={navbarContentStyle}>
					<span style={HomeLinkStyle}>Home</span>
					<span style={navbarContentLink} onClick={togglePopUp}>How it works</span>
					<span style={navbarContentLink} onClick={props.onClickApp}>Get Started</span>
				</div>
			</GeneralNavigationBar>
			<LandingPageContent
				centralIllustration='logos/logo-fullV3.png'
				onClick={props.onClickApp}
				onToggle={togglePopUp}
				onClickNeuro={props.onClickNeuroDiv}
			>
				<footer style={textStyle}>
					<div style={divSpacingStyle}>
						<div style={divCreditTitleStyle}>
							<span style={creditsTitleStyle}>Credits</span>
						</div>

						<li>General calendar logic and UI from MUI:'https://mui.com/x/react-date-pickers/date-calendar/'</li>
						<li>General Timer Logic from npm react-countdown:'https://www.npmjs.com/package/react-countdown'</li>
						<li>Icons from Google Icons: https://fonts.google.com/icons</li>
					</div>
				</footer>
			</LandingPageContent>
			{displayPopUp &&		
				<BasePopUp
					popUpTitle='How it Works'
					onAdd={togglePopUp}
					onClose={togglePopUp}
					buttonLabel='I Understand'
					width='400px'
					height='500px'
					paddingClose='200px'
					fontWeight='bold'
				>
					<div style={instructionContainerStyle}>
						<span>Here is a brief introduction to our features:</span>
						<li><span style={FeatureTextStyle}>Pomodoro Timer </span> - according to Auckland University it is "a time management tool where you chunk work into intervals consisting of focused work followed by short breaks." To use this in StudyBuddy, you can customise the length of your intervals via "edit", Reset your ongoing time via "Reset" and use the pause/play button to stop or resume the timer. </li>
						<li><span style={FeatureTextStyle}>Calendar</span> - a basic calendar tool that shows all the deadlines you inserted in the "deadlines" tab</li>
						<li><span style={FeatureTextStyle}>"Deadlines" Tab</span>-  allows you to upload your deadlines, so you can keep track of them.</li>
						<li><span style={FeatureTextStyle}>"My Notes" Tab</span> - allows you to upload your notes so you can easily access them in one place</li>
						<li><span style={FeatureTextStyle}>"Todo List" Tab</span> - allows you to make a interactive todo list</li>
					</div>
				</BasePopUp>
			}
		</>
	);
};

export default LandingPage;