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
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<pre>
				Map (
				{Array.from(map.entries()).map(([key, value]) => (
					<Fragment key={key}>{`\n  ${key}: ${value}`}</Fragment>
				))}
				<br />)
			</pre>
			<div className="grid grid-cols-2 items-baseline justify-center gap-2 *:w-32">
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={set}
				>
					Add
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={setAll}
				>
					Set new data
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
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
