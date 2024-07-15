import { useState } from "react";

import type { ChangeEvent } from "react";

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
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<h1>{count}</h1>
			<button
				className="bg-primary text-primary-foreground p-1 rounded-md w-full"
				type="button"
				onClick={() => setPlaying(!isPlaying)}
			>
				{isPlaying ? "pause" : "play"}
			</button>
			<div className="flex gap-1 justify-center items-baseline">
				<label htmlFor="delay">Delay: </label>
				<input
					className="rounded-md border border-gray-500 w-24 dark:border-gray-50 p-2 text-primary"
					type="number"
					name="delay"
					onChange={handleChange}
					value={delay}
				/>
			</div>
		</div>
	);
}