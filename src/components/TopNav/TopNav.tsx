import React from 'react';

export interface topNavProps {
    logoImgUrl:string,
    userIconUrl:string,
    altLabelLogo:string,
    altLabelUser:string,
	onClick:() => void
}

export const TopNav = (props:topNavProps) => {
	const logoStyle:React.CSSProperties={
		width:'100%',
		display: 'flex',
		justifyContent: 'left',
		padding: '0 0 0 15px',
	};
	const imgLogoStyle:React.CSSProperties ={
		position: 'absolute',
		width: '100px',
		height: '50px',
	};
	const navBarStyle:React.CSSProperties ={
		width:'100%',
		padding:'10px 0 10px 0',
		minHeight:'30px',
	};
	const returnStyle:React.CSSProperties={
		background:'none',
		border:'2px solid #68778d',
		color:'#68778d',
		fontWeight:'bold',
		borderRadius:'10px',
		margin:'5px 0 0 0',
		cursor:'pointer',
		width:'230px',
		height:'40px',
	};

	const btnContainerNavStyle:React.CSSProperties={
		background: 'none',
		border: 'none',
		display:'flex',
		justifyContent:'right',
		padding: '0 15px 0 0',
	};
	return (
		<div style={navBarStyle}>
			<div style={logoStyle}>
				<img src={props.logoImgUrl} alt={props.altLabelLogo} style={imgLogoStyle}/>
			</div>
			<div style={btnContainerNavStyle}>
				<button style={returnStyle} onClick={props.onClick}>Return to Landing Page</button>
			</div>
			
		</div>
	);
};
