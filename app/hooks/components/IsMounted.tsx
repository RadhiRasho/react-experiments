import { useEffect, useState } from "react";

import { useIsMounted } from "usehooks-ts";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Child() {
	const [data, setData] = useState("loading");
	const isMounted = useIsMounted();

	// simulate an api call and update state
	useEffect(() => {
		void delay(3000).then(() => {
			if (isMounted()) setData("OK");
		});
	}, [isMounted]);

	return (
		<div className="flex w-full justify-center rounded-md bg-red-500 text-primary-foreground dark:bg-green-500">
			{data}
		</div>
	);
}

export default function IsMounted() {
	const [isVisible, setVisible] = useState<boolean>(false);

	const toggleVisibility = () => {
		setVisible((state) => !state);
	};

	return (
		<div className="flex w-1/2 grow-0 flex-col items-center justify-start gap-2">
			<button
				className="w-full rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
				type="button"
				onClick={toggleVisibility}
			>
				{isVisible ? "Hide" : "Show"}
			</button>

			{isVisible && <Child />}
		</div>
	);
}
