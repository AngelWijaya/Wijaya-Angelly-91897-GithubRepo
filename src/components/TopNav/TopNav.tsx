import React from 'react';

export interface topNavProps {
    logoImgUrl:string,
    userIconUrl:string,
    altLabelLogo:string,
    altLabelUser:string,
}

export const TopNav = (props:topNavProps) => {
	const logoStyle:React.CSSProperties={
		width:'100%',
		display: 'flex',
		justifyContent: 'left',
		padding: '0 0 0 15px',
	};
	const userBtnStyle:React.CSSProperties ={
		background: 'none',
		border: 'none',
		display:'flex',
		justifyContent:'right',
		padding: '0 15px 0 0',
	};
	const imgLogoStyle:React.CSSProperties ={
		position: 'absolute',
		width: '100px',
		height: '50px',
	};
	const imgUserStyle:React.CSSProperties ={
		width: '50px',
		height: '50px',
		borderRadius: '100%',
		background: 'none',
		border: 'none',
	};
	const navBarStyle:React.CSSProperties ={
		paddingTop:'10px'
	};
	return (
		<div style={navBarStyle}>
			<div style={logoStyle}>
				<img src={props.logoImgUrl} alt={props.altLabelLogo} style={imgLogoStyle}/>
			</div>
			<div style={userBtnStyle}>
				<button style={imgUserStyle}>
					<img src={props.userIconUrl} alt={props.altLabelUser}/>
				</button>
			</div>
		</div>
	);
};
