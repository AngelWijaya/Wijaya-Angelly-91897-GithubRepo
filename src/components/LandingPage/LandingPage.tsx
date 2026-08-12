import React from 'react';
import { LandingNavigationBar } from './LandingNavigationBar';


const LandingPage = () => {
	const navbarContentStyle:React.CSSProperties={
		display:'flex',
		justifyContent:'left',
		width:'500px',
		minWidth:'500px',
		// marginLeft:'auto',
		// position:'sticky',
	};
	return (
		<LandingNavigationBar
			logoURL='logos/logo-short.png'
			logoLabel='Logo'
		>
			<div style={navbarContentStyle}>
				<a href=''>Home</a>
				<a href=''>How it works</a>
				<a href=''>Sign up</a>
			</div>
		</LandingNavigationBar>
	);
};

export default LandingPage;