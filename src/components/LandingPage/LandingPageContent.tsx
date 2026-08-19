import type React from "react";

interface landingContentProps{
    centralIllustration:string,
    children:React.ReactNode,
	onClick:() => void,
	onToggle:()  => void,
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

// const textContainerStyle:React.CSSProperties={
// 	width:'100%',
// 	height:'400px',
// 	textAlign:'center',
// 	position:'sticky',
// };

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


const LandingPageContent = (props:landingContentProps) => {
	return (
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
								<span style={linkStyle} onClick={props.onClick}>Get Started</span>
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
	);
};

export default LandingPageContent;