import { useEventCallback } from "usehooks-ts";

export default function EventCallback() {
	const handleClick = useEventCallback((event) => {
		// Handle the event here
		console.log("Clicked", event);
	});

	return (
		<button
			className="w-6/12 rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
			type="button"
			onClick={handleClick}
		>
			Click me
		</button>
	);
}
