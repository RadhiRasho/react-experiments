import { useTernaryDarkMode } from "usehooks-ts";

type TernaryDarkMode = ReturnType<typeof useTernaryDarkMode>["ternaryDarkMode"];

export default function TernaryDarkMode() {
	const { isDarkMode, ternaryDarkMode, setTernaryDarkMode, toggleTernaryDarkMode } = useTernaryDarkMode({
		initializeWithValue: false,
	});

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<div>
				<p>Current Theme: {isDarkMode ? "dark" : "light"}</p>
				<p>Ternary Mode: {ternaryDarkMode}</p>
			</div>
			<div className="flex flex-col gap-2 justify-center items-center">
				Toggle between three modes
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md w-48"
					type="button"
					onClick={toggleTernaryDarkMode}
				>
					Toggle from {ternaryDarkMode}
				</button>
			</div>
			<div className="flex flex-col justify-center items-center">
				Select a mode
				<br />
				<select
					className="w-32 bg-primary text-primary-foreground p-1 rounded-md"
					onChange={(ev) => setTernaryDarkMode(ev.target.value as TernaryDarkMode)}
					value={ternaryDarkMode}
				>
					<option value="light">light</option>
					<option value="system">system</option>
					<option value="dark">dark</option>
				</select>
			</div>
		</div>
	);
}