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
	return (
		<div style={navBarStyle}>
			<div style={logoStyle}>
				<img src={props.logoImgUrl} alt={props.altLabelLogo} style={imgLogoStyle}/>
			</div>
		</div>
	);
};
