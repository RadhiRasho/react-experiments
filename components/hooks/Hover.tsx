import { useRef } from "react";

import { useHover } from "usehooks-ts";

export default function Hover() {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);

	return (
		<div
			className="flex justify-center items-center w-full h-full"
			ref={hoverRef}
		>
			{`The current div is ${isHover ? "hovered" : "unhovered"}`}
		</div>
	);
}