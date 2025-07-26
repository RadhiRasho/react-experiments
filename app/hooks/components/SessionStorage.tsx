import { useSessionStorage } from "usehooks-ts";

export default function SessionStorage() {
	const [value, setValue, removeValue] = useSessionStorage("test-key", 0, { initializeWithValue: false });

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<div>
				Count: <span className="rounded-md bg-red-500 p-1 text-primary-foreground dark:bg-green-500">{value}</span>
			</div>
			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => setValue((x: number) => x + 1)}
				>
					Increment
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => setValue((x: number) => x - 1)}
				>
					Decrement
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => removeValue()}
				>
					Reset
				</button>
			</div>
		</div>
	);
}
