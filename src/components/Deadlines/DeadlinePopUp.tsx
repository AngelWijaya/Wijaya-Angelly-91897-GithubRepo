import React from 'react';

interface DeadlinePopUpProps {
    popUpTitle:string,
	onClose: () => void;
    children: React.ReactNode,
	onAdd:()=> void,

}
const popUpContainerStyle:React.CSSProperties = {
	backgroundColor:'white',
	width:'400px',
	height:'150px',
	borderRadius:'20px',

};
const popUpTitlesStyle :React.CSSProperties = {
	display:'inline-block',
	color:'#77879E',
	padding:'10px 10px 10px 10px'
};
const textstyle: React.CSSProperties ={
	fontSize:'19px',
	padding:'10px 0px 0px 10px'
};
const deadlineDetailStyle :React.CSSProperties ={
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	padding:'0 20px 0 0'
};

const addDeadlineDivStyle: React.CSSProperties ={
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	padding:'10px 0 0 0',
};

const deadlineBtnStyle:React.CSSProperties ={
	width:'360px',
	height:'40px',
	backgroundColor:'#6d7b8e',
	border: 'none',
	borderRadius:'10px',
	color:'white',
};

const closeIconStyle:React.CSSProperties ={
	paddingLeft:'190px',
	width:'23px',
	height:'23px',
	position:'absolute',
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
export const DeadlinePopUp = (props:DeadlinePopUpProps) => {
	return (
		<div style={popUpBackground}>
			<div style={popUpContainerStyle}>
				<div style={popUpTitlesStyle}>
					<span style={textstyle}>{props.popUpTitle}</span>
					<img src="icons/close-icon.png" alt="close icon" style={closeIconStyle} onClick={props.onClose}/>
				</div>
				<div style={deadlineDetailStyle}>
					{props.children}
				</div>
				<div style={addDeadlineDivStyle}>
					<button style={deadlineBtnStyle} onClick={props.onAdd}>Add deadline</button>
				</div>
			</div>
		</div>
	);
};
