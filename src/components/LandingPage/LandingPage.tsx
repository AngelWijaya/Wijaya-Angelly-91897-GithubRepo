import React from 'react';
import { LandingNavigationBar } from './LandingNavigationBar';


const LandingPage = () => {
	const navbarContentStyle:React.CSSProperties={
		width:'500px',
		minWidth:'500px',
		marginLeft:'auto',
		position:'sticky',
		alignItems:'center',
	};
	const navbarContentLink:React.CSSProperties={
		padding:'0 10px 0 10px'
	};
	return (
		<LandingNavigationBar
			logoURL='logos/logo-short.png'
			logoLabel='Logo'
		>
			<div style={navbarContentStyle}>
				<a href='' style={navbarContentLink}>Home</a>
				<a href='' style={navbarContentLink}>How it works</a>
				<a href='' style={navbarContentLink}>Sign up</a>
			</div>
		</LandingNavigationBar>
	);
};

export default LandingPage;