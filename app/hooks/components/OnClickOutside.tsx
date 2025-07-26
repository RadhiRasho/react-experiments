import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";

export default function OnClickOutside() {
	const ref = useRef(null);

	const handleClickOutside = () => {
		// Your custom logic here
		console.log("clicked outside");
	};

	const handleClickInside = () => {
		// Your custom logic here
		console.log("clicked inside");
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<button
			type="button"
			ref={ref}
			onClick={handleClickInside}
			className="size-full bg-primary text-primary-foreground hover:bg-primary/90"
		>
			Click Me
		</button>
	);
}
