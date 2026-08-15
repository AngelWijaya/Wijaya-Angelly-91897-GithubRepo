import React from 'react';

interface TimerPopUpProps {
    popUpTitle:string,
    onToggle: () => void;
    children: React.ReactNode,
    buttonLabel:string,

}
const popUpContainerStyle:React.CSSProperties = {
	backgroundColor:'white',
	width:'400px',
	height:'160px',
	borderRadius:'20px',

};
const popUpTitlesStyle :React.CSSProperties = {
	display:'inline-block',
	color:'#77879E',
	padding:'10px 10px 10px 10px'
};
const textstyle: React.CSSProperties ={
	fontWeight:'bold',
	fontSize:'19px',
	padding:'10px 0px 0px 10px'
};
const popUpDetailStyle :React.CSSProperties ={
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	padding:'0 20px 0 0'
};

const popUpDivStyle: React.CSSProperties ={
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	padding:'10px 0 0 0',
};

const popUpBtnStyle:React.CSSProperties ={
	cursor:'pointer',
	width:'360px',
	height:'40px',
	backgroundColor:'#6d7b8e',
	border: 'none',
	borderRadius:'10px',
	color:'white',
};

const popUpBackground :React.CSSProperties = { 
	width: '100%',
	height: '100%',
	borderRadius: '0',
	backgroundColor: '#0000008d',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'fixed',
	left: '0',
	top: '0',
	right: '0',
	bottom: '0',
};
export const TimerPopUp = (props:TimerPopUpProps) => {
	return (
		<div style={popUpBackground}>
			<div style={popUpContainerStyle}>
				<div style={popUpTitlesStyle}>
					<span style={textstyle}>{props.popUpTitle}</span>
				</div>
				<div style={popUpDetailStyle}>
					{props.children}
				</div>
				<div style={popUpDivStyle}>
					<button style={popUpBtnStyle} onClick={props.onToggle}>{props.buttonLabel}</button>
				</div>
			</div>
		</div>
	);
};
