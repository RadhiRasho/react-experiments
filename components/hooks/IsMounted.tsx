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
		<div className="dark:bg-green-500 bg-red-500 text-primary-foreground w-full flex justify-center rounded-md">
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
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center w-1/2">
			<button
				className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md w-full"
				type="button"
				onClick={toggleVisibility}
			>
				{isVisible ? "Hide" : "Show"}
			</button>

			{isVisible && <Child />}
		</div>
	);
}
