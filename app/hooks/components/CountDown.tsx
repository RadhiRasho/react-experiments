import type { ChangeEvent } from "react";
import { useState } from "react";

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
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<p>Count: {count}</p>

			<input
				className="w-32 rounded-md border p-2 text-primary"
				type="number"
				value={intervalValue}
				onChange={handleChangeIntervalValue}
			/>
			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={startCountdown}
				>
					start
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={stopCountdown}
				>
					stop
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={resetCountdown}
				>
					reset
				</button>
			</div>
		</div>
	);
}
