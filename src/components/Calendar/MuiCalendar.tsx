import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { useState } from 'react';
import React from 'react';
import Badge from '@mui/material/Badge';
import { PickerDay } from '@mui/x-date-pickers';
import type { PickerDayProps} from '@mui/x-date-pickers';

interface CalendarProps {
    bgColor?:string,
    fontColor?:string,
}

interface ServerDayProps extends PickerDayProps {
	dates?: string[],
}

const ServerDay = (props: ServerDayProps) => {
	const { dates, ...pickerDayProps } = props;
	const curServerDay = dayjs(pickerDayProps.day).format('YYYY-MM-DD');
	const isSelected = dates && dates.includes(curServerDay) ? true : false;
	return(
		<Badge
			badgeContent={isSelected ? '💗' : undefined}
		>
			<PickerDay {...pickerDayProps} />
		</Badge>
	);
};



export const BasicDateCalendar = (props:CalendarProps) => {
	const highlightedDays = ['2026-08-17'];
	// const [highlightedDays, setHighlightedDays]= useState("2026-08-17");

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateCalendar
				slots={{
					day: ServerDay,
				}}
				slotProps={{
					day: {
						dates: highlightedDays,
					} as any,
				}}
				sx={{
					backgroundColor: props.bgColor??'#ffffff',
					borderRadius: '20px',
					border: '2px solid #68778d',
					width:'390px',
					minHeight:'400px',
					'& .MuiPickerDay-root':{
						fontSize:'15px',
						fontFamily:'"Hepta Slab", serif',
						color:props.fontColor??'#68778d',
					},
					'& .MuiDayCalendar-weekContainer':{
						gap:'15px',
						paddingBottom:'10px'
					},
					'& .MuiDayCalendar-header':{
						gap:'15px',
					
					},
					'& .MuiDayCalendar-weekDayLabel':{
						fontSize:'17px',
						fontFamily:'"Hepta Slab", serif',
						fontWeight:'bold',
						color:props.fontColor??'#68778d',
					},
					'& .MuiPickersCalendarHeader-labelContainer':{
						color:props.fontColor??'#68778d',
						fontSize:'20px',
						fontWeight:'bold',
						textDecoration:'underline'
					},
					'& .Mui-selected': {
						backgroundColor:'rgba(79, 91, 108, 0.47)'
					},
					'& .MuiSvgIcon-root':{
						color:props.fontColor??'#68778d',
					},
					"& .MuiPickerDay-root:focus":{
						backgroundColor:'rgba(88, 131, 192, 0.6)',
						color:'white'
					},
					"& .MuiYearCalendar-button":{
						fontFamily:'"Hepta Slab", serif',
					},
					"& .MuiYearCalendar-button:focus":{
						backgroundColor:'rgba(88, 131, 192, 0.6)',
						color:'white'
					}


				}} />
		</LocalizationProvider>
	);
};