import { useLocalStorage } from "usehooks-ts";

export default function LocalStorage() {
	const [value, setValue, removeValue] = useLocalStorage("test-key", 0, {
		initializeWithValue: false,
	});

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<div>
				Count: <span className="dark:bg-green-500 text-primary-foreground bg-red-500 p-1 rounded-md">{value}</span>
			</div>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-[8rem]">
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => setValue((x: number) => x + 1)}
				>
					Increment
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => setValue((x: number) => x - 1)}
				>
					Decrement
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => removeValue()}
				>
					Reset
				</button>
			</div>
		</div>
	);
}