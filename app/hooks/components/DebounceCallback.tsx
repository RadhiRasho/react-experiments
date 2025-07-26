import { useState } from "react";

import { useDebounceCallback } from "usehooks-ts";

export default function DebounceCallback() {
	const [value, setValue] = useState("");

	const debounced = useDebounceCallback(setValue, 500);

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<p>Debounced value: {value}</p>

			<input
				className="rounded-md border border-gray-500 p-2 text-primary dark:border-gray-50"
				type="text"
				defaultValue={value}
				onChange={(event) => debounced(event.target.value)}
			/>
		</div>
	);
}
