import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

type TernaryDarkMode = ReturnType<typeof useTernaryDarkMode>["ternaryDarkMode"];

export default function TernaryDarkMode() {
	const { isDarkMode, ternaryDarkMode, setTernaryDarkMode, toggleTernaryDarkMode } = useTernaryDarkMode({
		initializeWithValue: false,
	});
	const { setTheme } = useTheme();

	useEffect(() => setTheme(isDarkMode ? "dark" : "light"), [isDarkMode, setTheme]);

	function isTernaryDarkMode(value: string): value is TernaryDarkMode {
		return ["light", "system", "dark"].includes(value);
	}

	function SetDarkMode(value: string) {
		if (isTernaryDarkMode(value)) setTernaryDarkMode(value);
		else console.error(`${value} is not a valid TernaryDarkMode`);
	}

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
					onChange={(ev) => SetDarkMode(ev.target.value)}
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
