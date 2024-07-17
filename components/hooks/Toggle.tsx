import { useToggle } from "usehooks-ts";

export default function Toggle() {
	const [value, toggle, setValue] = useToggle(false);

	// Just an example to use "setValue"
	const customToggle = () => {
		setValue((x: boolean) => !x);
	};

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<p>
				Value is{" "}
				<code className="bg-red-500 dark:bg-green-500 text-primary-foreground p-1 rounded-md">{value.toString()}</code>
			</p>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-[8rem]">
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => setValue(true)}
				>
					set true
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => setValue(false)}
				>
					set false
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={toggle}
				>
					toggle
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={customToggle}
				>
					custom toggle
				</button>
			</div>
		</div>
	);
}
