import React from 'react';

export interface BaseCardProps {
    bgColor?: string;
    label: string;
    iconUrl: string;
    iconLabel:string;
    height: string;
    width: string;
    children: React.ReactNode;
	gridArea:string,
}



export const BaseCard = (props: BaseCardProps) => {
	const containerStyle: React.CSSProperties = {
		fontFamily: `Hepta Slab, serif`,
		borderRadius:'20px',
		height:props.height ?? '200px',
		width: props.width ?? '400px',
		backgroundColor: props.bgColor ?? '#D2DFF2',
		gridArea:props.gridArea,
	};

	console.log(containerStyle);
	const containerHeaderStyle: React.CSSProperties ={
		display: 'inline-flex',
		padding: '10px 0 10px 3px',
		width:props.width??'390px'
	};
	const containerIconStyle : React.CSSProperties ={
		display: 'inline-block',
		padding: '1px 5px 0px 20px',
		width: '26px',
		height: '23px',
		color: '#77879E',
	};
	const containerTitleStyle: React.CSSProperties ={
		display: 'inline-block',
		padding: '0 5px 0 0',
		fontWeight: 'bold',
		fontSize: '23px',
		color: '#77879E',
	};

	return (
		<div style={containerStyle}>
			<div style={containerHeaderStyle}>
				<img style={containerIconStyle} src={props.iconUrl} alt={props.iconLabel}/>
				<span style={containerTitleStyle}>{props.label}</span>
			</div>
			{props.children}
		</div>
	);
};