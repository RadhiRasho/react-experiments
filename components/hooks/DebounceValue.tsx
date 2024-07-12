import { useDebounceValue } from "usehooks-ts";

export default function DebounceValue({ defaultValue = "John" }) {
	const [debouncedValue, setValue] = useDebounceValue(defaultValue, 500);

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<p>Debounced value: {debouncedValue}</p>

			<input
				type="text"
				className="rounded-md border border-gray-500 dark:border-gray-50 p-2 text-primary"
				defaultValue={defaultValue}
				onChange={(event) => setValue(event.target.value)}
			/>
		</div>
	);
}