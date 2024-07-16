import { useIsomorphicLayoutEffect, useScript } from "usehooks-ts";

// biome-ignore lint/suspicious/noExplicitAny: On Purpose
declare const jQuery: any;

export default function Script() {
	// Load the script asynchronously
	const status = useScript("https://code.jquery.com/jquery-3.5.1.min.js", {
		removeOnUnmount: false,
		id: "jquery",
		shouldPreventLoad: true,
	});

	useIsomorphicLayoutEffect(() => {
		if (typeof jQuery !== "undefined") {
			// jQuery is loaded => print the version
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			alert(jQuery?.fn?.jquery);
		}
	}, [status]);

	return (
		<div className="flex flex-col justify-center items-center">
			<p>Current Status: {status}</p>

			{status === "ready" && <p>You can use the script here.</p>}
		</div>
	);
}