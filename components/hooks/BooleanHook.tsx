import { useBoolean } from "usehooks-ts";

export default function BooleanHook() {
	const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

	// Just an example to use "setValue"
	const customToggle = () => {
		setValue((x: boolean) => !x);
	};

	return (
		<div className="flex justify-center flex-col items-center gap-2">
			<p>
				Value is <code className="bg-red-500 dark:bg-green-500 p-1 text-primary rounded-md">{value.toString()}</code>
			</p>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-[8rem]">
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={setTrue}
				>
					set true
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={setFalse}
				>
					set false
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={toggle}
				>
					toggle
				</button>
			</div>
		</div>
	);
}
