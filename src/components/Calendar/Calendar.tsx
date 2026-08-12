import { BasicDateCalendar } from "./MuiCalendar";

export const Calendar = () => {
	// const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
	return(
		<div>
			<BasicDateCalendar
				highlightedDays={["2026-08-17"]}
			/>
		</div>
	);
};