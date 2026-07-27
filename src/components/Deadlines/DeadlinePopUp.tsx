import React from 'react';

interface DeadlinePopUpProps {
    PopUptitle:string,
    children: React.ReactNode,

}
const popUpContainerStyle:React.CSSProperties = {
	backgroundColor:'white',
	width:'400px',
	height:'200px',
	borderRadius:'20px',

};
const popUpTitlesStyle :React.CSSProperties = {
	display:'inline-block',
	color:'#77879E',
	padding:'10px 10px 10px 10px'
};
const textstyle: React.CSSProperties ={
	fontSize:'21px',
	padding:'10px 0px 0px 10px'
};
const deadlineDetailStyle :React.CSSProperties ={
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	padding:'0 20px 0 0'
};

const addDeadlineStyle: React.CSSProperties ={
	
};
export const DeadlinePopUp = (props:DeadlinePopUpProps) => {
	return (
		<div style={popUpContainerStyle}>
			<div style={popUpTitlesStyle}>
				<span style={textstyle}>{props.PopUptitle}</span>
			</div>
			<div style={deadlineDetailStyle}>
				{props.children}
			</div>
			<div>
				<button>Add deadline</button>
			</div>
		</div>
	);
};
