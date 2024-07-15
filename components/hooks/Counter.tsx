import { useCounter } from "usehooks-ts";

export default function Counter() {
	const { count, setCount, increment, decrement, reset } = useCounter(0);

	const multiplyBy2 = () => {
		setCount((x: number) => x * 2);
	};

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<p>
				Count is <span className="bg-red-500 dark:bg-green-500 p-1 rounded-md">{count}</span>
			</p>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-[8rem]">
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={increment}
				>
					Increment
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={decrement}
				>
					Decrement
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={multiplyBy2}
				>
					Multiply by 2
				</button>
			</div>
		</div>
	);
}
