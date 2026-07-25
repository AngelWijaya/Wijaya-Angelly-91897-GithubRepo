import React from 'react';

export interface MainContentProps {
    children:React.ReactNode,
}

export const MainContent = (props:MainContentProps) => {
	const mainContentStyle:React.CSSProperties ={
		display:'grid',
		gridTemplateColumns: "390px 400px 400px",
		gridTemplateAreas:
        `box-1 box-2 box-3
         box-4 box-5 box-3`,
		padding: '10px',
		gap: '25px',
	};
	return (
		<div style={mainContentStyle}>
			{props.children}
		</div>
	);
};
