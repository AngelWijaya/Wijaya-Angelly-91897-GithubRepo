import React from 'react';
import { LandingNavigationBar } from './LandingNavigationBar';
import LandingPageContent from './LandingPageContent';

interface landingPageProps{
	onClick: () => void,
}
const LandingPage = (props:landingPageProps) => {
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
	};

	const getStartedStyle:React.CSSProperties={
		backgroundColor:'#68778d',
		width: '200px',
		height:'50px',
		fontWeight:'bold',
		border:'none',
		borderRadius:'13px',
		fontSize:'15px',
		cursor:'pointer',

	};

	const learnMoreStyle:React.CSSProperties={
		background:'none',
		width: '200px',
		height:'50px',
		fontWeight:'bold',
		border:'2px solid #68778d',
		borderRadius:'13px',
		fontSize:'15px',
		marginLeft:'10px',
		cursor:'pointer',

	};

	const linkStyle:React.CSSProperties={
		color:'white',
		textDecoration:'none',
	};

	const linkLearnMoreStyle:React.CSSProperties={
		color:'#68778d',
		textDecoration:'none',
	};

	const centralTextContainerStyle:React.CSSProperties={
		textAlign:'center',
		fontSize:'14px',
		width:'600px',
		padding:'10px 0 0 0',
		height:'40px',
		color:'#4a586e',
	};

	const buttonContainerStyle:React.CSSProperties={
		width:'600px',
		height:'60px',
		textAlign:'center',
	};

	const highlightedTextStyle:React.CSSProperties={
		fontWeight:'bold',
		fontSize:'18px',
	};

	return (
		<>
			<LandingNavigationBar
				logoURL='logos/logo-short.png'
				logoLabel='Logo'
			>
				<div style={navbarContentStyle}>
					<a href='' style={navbarContentLink}>Home</a>
					<a href='' style={navbarContentLink}>How it works</a>
					<a href='' style={navbarContentLink}>Get Started</a>
				</div>
			</LandingNavigationBar>
			<LandingPageContent
				centralIllustration='logos/logo-fullV3.png'
			>
				<div style={centralTextContainerStyle}>
					<span style={highlightedTextStyle}>
						StudyBuddy: An all built in and easy digital organiser! 
					</span>
				</div>
				<div style={buttonContainerStyle}>
					<button style={getStartedStyle}>
						<span style={linkStyle} onClick={props.onClick}>Get Started</span>
					</button>
					<button style={learnMoreStyle}>
						<span style={linkLearnMoreStyle} onClick={props.onClick}>Learn More</span>
					</button>
				</div>
			</LandingPageContent>
		</>
	);
};

export default LandingPage;