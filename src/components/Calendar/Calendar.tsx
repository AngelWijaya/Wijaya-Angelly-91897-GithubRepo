import { BasicDateCalendar } from "./MuiCalendar";

interface CalendarProps {
	highlightedDays: string[],
}

export const Calendar = (props: CalendarProps) => {
	return(
		<div>
			<BasicDateCalendar
				highlightedDays={props.highlightedDays}
			/>
		</div>
	);
};