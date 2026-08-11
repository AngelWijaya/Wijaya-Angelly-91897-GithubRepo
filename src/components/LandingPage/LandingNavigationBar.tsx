import React, { type ReactNode } from 'react';

interface navBarProps {
    logoURL:string,
	logoLabel:string,
    children: React.ReactNode,
}

export const LandingNavigationBar = (props: navBarProps) => {
	return (
		<div>
			<img src={props.logoURL} alt={props.logoLabel}/>
			{props.children}
		</div>
	);
};