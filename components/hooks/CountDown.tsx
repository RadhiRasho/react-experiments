import { useState } from "react";

import type { ChangeEvent } from "react";

import { useCountdown } from "usehooks-ts";

export default function CountDown() {
	const [intervalValue, setIntervalValue] = useState<number>(1000);
	const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
		countStart: 60,
		intervalMs: intervalValue,
	});

	const handleChangeIntervalValue = (event: ChangeEvent<HTMLInputElement>) => {
		setIntervalValue(Number(event.target.value));
	};

	return (
		<div className="flex flex-col gap-2 grow-0 justify-start items-center">
			<p>Count: {count}</p>

			<input
				className="border rounded-md p-2 text-primary w-32"
				type="number"
				value={intervalValue}
				onChange={handleChangeIntervalValue}
			/>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-32">
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={startCountdown}
				>
					start
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={stopCountdown}
				>
					stop
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={resetCountdown}
				>
					reset
				</button>
			</div>
		</div>
	);
}
