import { useToggle } from "usehooks-ts";

export default function Toggle() {
	const [value, toggle, setValue] = useToggle(false);

	// Just an example to use "setValue"
	const customToggle = () => {
		setValue((x: boolean) => !x);
	};

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<p>
				Value is{" "}
				<code className="rounded-md bg-red-500 p-1 text-primary-foreground dark:bg-green-500">{value.toString()}</code>
			</p>
			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => setValue(true)}
				>
					set true
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => setValue(false)}
				>
					set false
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={toggle}
				>
					toggle
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={customToggle}
				>
					custom toggle
				</button>
			</div>
		</div>
	);
}
