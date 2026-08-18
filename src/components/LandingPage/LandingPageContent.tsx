import type React from "react";

interface landingContentProps{
    centralIllustration:string,
    children:React.ReactNode,
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

const textContainerStyle:React.CSSProperties={
	width:'600px',
	height:'400px',
	textAlign:'center'
};
const LandingPageContent = (props:landingContentProps) => {
	return (
		<div>
			<div style={centralImgDivStyle}>
				<img src={props.centralIllustration} style={centralImageSTyle}/>
			</div>
			<div style={textDivStyle}>
				<div style={textContainerStyle}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default LandingPageContent;