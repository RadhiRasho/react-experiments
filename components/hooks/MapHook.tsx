import { Fragment } from "react";

import { useMap } from "usehooks-ts";

export default function MapHook() {
	const [map, actions] = useMap<string, string>([["key", "🆕"]]);

	const set = () => {
		actions.set(String(Date.now()), "📦");
	};
	const setAll = () => {
		actions.setAll([
			["hello", "👋"],
			["data", "📦"],
		]);
	};
	const reset = () => {
		actions.reset();
	};
	const remove = () => {
		actions.remove("hello");
	};

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<pre>
				Map (
				{Array.from(map.entries()).map(([key, value]) => (
					<Fragment key={key}>{`\n  ${key}: ${value}`}</Fragment>
				))}
				<br />)
			</pre>
			<div className="grid grid-cols-2 gap-2 justify-center items-baseline *:w-[8rem]">
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={set}
				>
					Add
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={setAll}
				>
					Set new data
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={remove}
					disabled={!map.get("hello")}
				>
					{'Remove "hello"'}
				</button>
			</div>
		</div>
	);
}
