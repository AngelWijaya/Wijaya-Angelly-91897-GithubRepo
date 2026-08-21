import type React from "react";
import { useState } from "react";
import { BasePopUp } from "../BasePopUp";

interface landingContentProps{
    centralIllustration:string,
    children:React.ReactNode,
	onClick:() => void,
	onToggle:()  => void,
	onClickNeuro:()=> void,
}


const centralImgDivStyle:React.CSSProperties={
	display:'flex',
	justifyContent:'center',
	width:'100%',
	height:'100%',
};

const centralImageSTyle:React.CSSProperties={
	padding:'140px 0 0 0',
	width:'270px',
	height:'270px',
	opacity:'70%',
};

const textDivStyle:React.CSSProperties={
	display:'flex',
	justifyContent:'center',
	alignContent:'center',
	alignItems:'center',
	textAlign:'center',
	width:'100%',
	height:'100%',
};

const contentContainerStyle:React.CSSProperties={
	width:'600px',
	height:'400px',
	textAlign:'center',
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

const defaultMode:React.CSSProperties={
	width:'250px',
	height:'270px',
	border:'2px solid #68778d',
	borderRadius:'20px',
	color:'#68778d',
	fontSize:'14px',
	padding:'10px 10px 0 10px',

};

const NeuroDiversityMode:React.CSSProperties={
	width:'250px',
	height:'270px',
	border:'2px solid #68778d',
	color:'#68778d',
	fontSize:'14px',
	borderRadius:'20px',
	padding:'10px 10px 0 10px',
	margin:'0 0 0 20px',
};

const modeTitleStyle:React.CSSProperties={
	fontSize:'18px',
	fontWeight:'bold'
};

const modeBtnStyle:React.CSSProperties={
	cursor:'pointer',
	width:'240px',
	height:'40px',
	backgroundColor:'#6d7b8e',
	border: 'none',
	borderRadius:'10px',
	color:'white',
};

const containerModeBtnDivStyleDefault:React.CSSProperties={
	width:'100%',
	height:'100px',
	display:'flex',
	justifyContent:'center',
	padding:'100px 0 0 0'
};

const containerModeBtnDivStyleNeuro:React.CSSProperties={
	width:'100%',
	height:'100px',
	display:'flex',
	justifyContent:'center',
	padding:'82px 0 0 0'
};
const LandingPageContent = (props:landingContentProps) => {
	const [displayNeuroDivPopUp, setDisplayNeuroDivPopUp]=useState(false);
	
	const toggleNeuroDivPopUp = () => {
		setDisplayNeuroDivPopUp(!displayNeuroDivPopUp);
	};

	return (
		<>
			<div>
				<div style={centralImgDivStyle}>
					<img src={props.centralIllustration} style={centralImageSTyle}/>
				</div>
				<div style={textDivStyle}>
					<div>
						<div style={contentContainerStyle}>
							<div style={centralTextContainerStyle}>
								<span style={highlightedTextStyle}>
						StudyBuddy: An all built in and easy digital organiser! 
								</span>
							</div>
							<div style={buttonContainerStyle}>
								<button style={getStartedStyle}>
									<span style={linkStyle} onClick={toggleNeuroDivPopUp}>Get Started</span>
								</button>
								<button style={learnMoreStyle}>
									<span style={linkLearnMoreStyle} onClick={props.onToggle}>Learn More</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				{props.children}
			</div>
			{displayNeuroDivPopUp &&
						<BasePopUp
							popUpTitle='Choose a mode'
							onAdd={toggleNeuroDivPopUp}
							onClose={toggleNeuroDivPopUp}
							buttonLabel='Cancel'
							width='600px'
							height='400px'
							maxWidth="600px"
							paddingClose="380px"
							generalPadding="0 0 0 0"
							buttonWidth="560px"
							btnColor="rgb(148, 112, 112)"
						>
							<div style={defaultMode}>
								<h2 style={modeTitleStyle}>Default mode</h2>
								<span>This is the regular mode, if you choose this, the calendar and timer feature will be active. All other features will remain the same.</span>
								<div style={containerModeBtnDivStyleDefault}>
									<button style={modeBtnStyle} onClick={props.onClick}>Choose default mode</button>
								</div>
							</div>
							<div style={NeuroDiversityMode}>
								<h2 style={modeTitleStyle}>Neuro Diversity mode</h2>
								<span>This is the neurodiversity-friendly mode, if you choose this, the calendar and timer feature will be hidden. But you can choose to show/hide them anytime.</span>
								<div style={containerModeBtnDivStyleNeuro}>
									<button style={modeBtnStyle} onClick={props.onClickNeuro}>Choose neurodiversity mode</button>
								</div>
							</div>
						</BasePopUp>
						
			}
		</>
	);
};

export default LandingPageContent;