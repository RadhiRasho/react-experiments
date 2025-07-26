import { useCounter } from "usehooks-ts";

export default function Counter() {
	const { count, setCount, increment, decrement, reset } = useCounter(0);

	const multiplyBy2 = () => {
		setCount((x: number) => x * 2);
	};

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<p>
				Count is <span className="rounded-md bg-red-500 p-1 text-primary-foreground dark:bg-green-500">{count}</span>
			</p>
			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={increment}
				>
					Increment
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={decrement}
				>
					Decrement
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={multiplyBy2}
				>
					Multiply by 2
				</button>
			</div>
		</div>
	);
}
