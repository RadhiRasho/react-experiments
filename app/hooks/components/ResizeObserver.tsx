import { useRef, useState } from "react";

import { useDebounceCallback, useResizeObserver } from "usehooks-ts";

type Size = {
	width?: number;
	height?: number;
};

export default function ResizeObserver() {
	const ref = useRef<HTMLDivElement>(null);
	const { width = 0, height = 0 } = useResizeObserver({
		ref,
		box: "border-box",
	});

	return (
		<div ref={ref} className="grid h-full w-full place-content-center border border-[palevioletred]">
			{width} x {height}
		</div>
	);
}

export function WithDebounce() {
	const ref = useRef<HTMLDivElement>(null);
	const [{ width, height }, setSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});

	const onResize = useDebounceCallback(setSize, 200);

	useResizeObserver({
		ref,
		onResize,
	});

	return (
		<div
			ref={ref}
			className="grid h-full min-h-1 w-full min-w-1 resize place-content-center overflow-auto border border-[palevioletred]"
		>
			debounced: {width} x {height}
		</div>
	);
}
