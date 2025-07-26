import { useBoolean } from "usehooks-ts";

export default function BooleanHook() {
	const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

	// Just an example to use "setValue"
	const _customToggle = () => {
		setValue((x: boolean) => !x);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<p>
				Value is{" "}
				<code className="rounded-md bg-red-500 p-1 text-primary-foreground dark:bg-green-500">{value.toString()}</code>
			</p>
			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={setTrue}
				>
					set true
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={setFalse}
				>
					set false
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={toggle}
				>
					toggle
				</button>
			</div>
		</div>
	);
}
