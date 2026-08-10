import { useState, useCallback, useMemo } from 'react';

function detectLocaleFirstDay(locale:string){
	try{
		const loc = new Intl.Locale(locale);

		if (loc.weekInfo?.firstDay){
			const index = loc.weekInfo.firstDay % 7;
			return index;
		}
	}
	catch (error){
		console.log('error');
	}
	return 0;
};

export const useCalendar = (date: Date, locale: string) => {

	const [startofMonth,setStartofMonth] = useState(
		new Date(date.getFullYear(), date.getMonth(), 1)
	);

	const goNext = useCallback(() => {
		setStartofMonth((date:Date) => new Date(date.getFullYear(),date.getMonth()+1, 1));
	}, []);

	const goPrevious = useCallback(() => {
		setStartofMonth((date:Date) => new Date(date.getFullYear(),date.getMonth()-1, 1));
	}, []);

	const data = useMemo(() => {
		const now= new Date();
		const year= startofMonth.getFullYear();
		const month= startofMonth.getMonth();

		const endofMonth= new Date(year, month +1, 0);
		const daysInMonth = endofMonth.getDate();

		const weekdayFormatter = new Intl.DateTimeFormat(locale, {
			weekday: 'short'
		});

		

		console.log(new Date());

		let weekdays = Array.from({length: 7}, (_, i) => {
			const base = new Date(2026, 7, i + 1);
			// const base = new Date(2026, 7, i + 1);
			return weekdayFormatter.format(base);
		}); 

		const startIndex =detectLocaleFirstDay(locale);
		weekdays = weekdays.slice(startIndex).concat(weekdays.slice(0,startIndex));

		console.log('weekdays 1111', weekdays);

		return{};

	}, [startofMonth]);
	// use MUI
	return{...data, startofMonth,goNext,goPrevious};
};

