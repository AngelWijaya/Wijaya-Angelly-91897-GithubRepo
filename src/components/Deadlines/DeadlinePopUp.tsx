import React from 'react';

interface DeadlinePopUpProps {
    iconURL:string,
    iconLabel:string,
    PopUptitle:string,
    children: React.ReactNode,

}

export const DeadlinePopUp = (props:DeadlinePopUpProps) => {
	return (
		<div className='Titles'>
			<img src={props.iconURL} alt={props.iconLabel}/>
			<span>{props.PopUptitle}</span>
		</div>
	);
};
