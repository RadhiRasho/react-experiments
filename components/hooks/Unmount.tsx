import { useUnmount } from "usehooks-ts";

export default function Unmount() {
	useUnmount(() => {
		// Cleanup logic here
		console.log("I've unmounted");
	});

	return <div>Hello world</div>;
}