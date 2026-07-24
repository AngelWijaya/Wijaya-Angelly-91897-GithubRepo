import React from "react";
import {CalendarCards} from '../CalendarCard/CalendarCard';

export const Calendar = () => {
	return(
		<CalendarCards
			bgColor="#ffffff"
			month ='January'
			year = '2026'
			arrowIconurlPrev='icons/arrow-back.png'
			arrowIconurlAfter='icons/arrow-forward.png'
			iconLabelPrev ='previous icon'
			iconLabelAfter ='After icon'
		>
            test
		</CalendarCards>
	);
};