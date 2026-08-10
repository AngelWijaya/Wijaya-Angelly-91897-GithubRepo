import React from "react";
import {CalendarCards} from '../CalendarCard/CalendarCard';
import { useCalendar } from "./useCalendar";

export const Calendar:React.FC<{locale?:string}> = 
({locale = navigator.language}) => {
	
	const {startofMonth, goNext,goPrevious} = useCalendar(new Date(), locale);

	return(
		<CalendarCards
			bgColor="#ffffff"
			month ='January'
			year = '2026'
			arrowIconurlPrev='icons/arrow-back.png'
			arrowIconurlAfter='icons/arrow-forward.png'
			iconLabelPrev ='previous icon'
			iconLabelAfter ='After icon'
			gridArea="box-3"
		>
			<div className="days">
				<div className="Monday">
					<span>Mon</span>
				</div>
				<div className="Tuesday">
					<span>Tue</span>
				</div>
				<div className="Wednesday">
					<span>Wed</span>
				</div>
				<div className="Thursday">
					<span>Thu</span>
				</div>
				<div className="Friday">
					<span>Fri</span>
				</div>
				<div className="Saturday">
					<span>Sat</span>
				</div>
				<div className="Sunday">
					<span>Sun</span>
				</div>
			</div>

		</CalendarCards>
	);
};