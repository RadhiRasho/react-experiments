import { useState } from "react";

import { useDebounceCallback } from "usehooks-ts";

export default function DebounceCallback() {
	const [value, setValue] = useState("");

	const debounced = useDebounceCallback(setValue, 500);

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<p>Debounced value: {value}</p>

			<input
				className="rounded-md border p-2 border-gray-500 dark:border-gray-50  text-primary"
				type="text"
				defaultValue={value}
				onChange={(event) => debounced(event.target.value)}
			/>
		</div>
	);
}