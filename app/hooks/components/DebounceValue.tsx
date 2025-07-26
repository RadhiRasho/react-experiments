import { useDebounceValue } from "usehooks-ts";

export default function DebounceValue({ defaultValue = "John" }) {
	const [debouncedValue, setValue] = useDebounceValue(defaultValue, 500);

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<p>Debounced value: {debouncedValue}</p>

			<input
				type="text"
				className="rounded-md border border-gray-500 p-2 text-primary dark:border-gray-50"
				defaultValue={defaultValue}
				onChange={(event) => setValue(event.target.value)}
			/>
		</div>
	);
}
