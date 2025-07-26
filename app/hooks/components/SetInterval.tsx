import type { ChangeEvent } from "react";
import { useState } from "react";

import { useInterval } from "usehooks-ts";

export default function SetInterval() {
	// The counter
	const [count, setCount] = useState<number>(0);
	// Dynamic delay
	const [delay, setDelay] = useState<number>(1000);
	// ON/OFF
	const [isPlaying, setPlaying] = useState<boolean>(false);

	useInterval(
		() => setCount(count + 1),
		// Delay in milliseconds or null to stop it
		isPlaying ? delay : null,
	);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setDelay(Number(event.target.value));
	};

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<h1>{count}</h1>
			<button
				className="w-full rounded-md bg-primary p-1 text-primary-foreground"
				type="button"
				onClick={() => setPlaying(!isPlaying)}
			>
				{isPlaying ? "pause" : "play"}
			</button>
			<div className="flex items-baseline justify-center gap-1">
				<label htmlFor="delay">Delay: </label>
				<input
					className="w-24 rounded-md border border-gray-500 p-2 text-primary dark:border-gray-50"
					type="number"
					name="delay"
					onChange={handleChange}
					value={delay}
				/>
			</div>
		</div>
	);
}
