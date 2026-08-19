import React from 'react';

interface BasePopUpProps {
    popUpTitle:string,
	onClose?: () => void;
    children: React.ReactNode,
	onAdd?:()=> void,
	buttonLabel:string,
	width?:string,
	height?:string,
	paddingClose?:string,
	fontColor?:string,
	fontWeight?:string,
}
export const BasePopUp = (props:BasePopUpProps) => {
	const popUpContainerStyle:React.CSSProperties = {
		backgroundColor:'white',
		width:props.width ?? '400px',
		height: props.height ??'150px',
		borderRadius:'20px',

	};
	const popUpTitlesStyle :React.CSSProperties = {
		display:'inline-block',
		color:props.fontColor?? '#77879E',
		padding:'10px 10px 10px 10px'
	};
	const textstyle: React.CSSProperties ={
		fontSize:'19px',
		padding:'10px 0px 0px 10px',
		fontWeight:props.fontWeight ?? 'normal'
	};
	const popUpDetailStyle :React.CSSProperties ={
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		padding:'0px 20px 0px 0',
		maxWidth:'400px',
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

	const closeIconStyle:React.CSSProperties ={
		cursor:'pointer',
		paddingLeft:props.paddingClose ?? '190px',
		width:'23px',
		height:'23px',
		position:'absolute',
	};

	const popUpBackground :React.CSSProperties = { 
		zIndex:'999',
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
	return (
		<div style={popUpBackground}>
			<div style={popUpContainerStyle}>
				<div style={popUpTitlesStyle}>
					<span style={textstyle}>{props.popUpTitle}</span>
					<img src="icons/close-icon.png" alt="close icon" style={closeIconStyle} onClick={props.onClose}/>
				</div>
				<div style={popUpDetailStyle}>
					{props.children}
				</div>
				<div style={popUpDivStyle}>
					<button style={popUpBtnStyle} onClick={props.onAdd}>{props.buttonLabel}</button>
				</div>
			</div>
		</div>
	);
};
