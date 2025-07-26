import { useRef } from "react";

import { useHover } from "usehooks-ts";

export default function Hover() {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);

	return (
		<div className="flex h-full w-full items-center justify-center" ref={hoverRef}>
			{`The current div is ${isHover ? "hovered" : "unhovered"}`}
		</div>
	);
}
