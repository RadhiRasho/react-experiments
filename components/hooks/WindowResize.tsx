import { useWindowSize } from "usehooks-ts";

export default function WindowSize() {
	const { width = 0, height = 0 } = useWindowSize({
		initializeWithValue: false,
	});

	return (
		<div>
			The current window dimensions are:
			<br />
			<p>Height: {height}</p>
			<p>Width: {width}</p>
		</div>
	);
}