import { BasicDateCalendar } from "./MuiCalendar";
import type { DeadlineCard } from "../Deadlines/Deadlines";

interface CalendarDeadlineProps {
	deadlines:DeadlineCard[],
}

export const Calendar = (props:CalendarDeadlineProps) => {
	return(
		<div>
			<BasicDateCalendar
				highlightedDays={props.deadlines.map((deadline) => deadline.date)}
			/>
		</div>
	);
};