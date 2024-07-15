import { useEventCallback } from "usehooks-ts";

export default function EventCallback() {
	const handleClick = useEventCallback((event) => {
		// Handle the event here
		console.log("Clicked", event);
	});

	return (
		<button
			className="bg-primary hover:bg-primary/85 text-primary-foreground p-1 rounded-md w-6/12"
			type="button"
			onClick={handleClick}
		>
			Click me
		</button>
	);
}
