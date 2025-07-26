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
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<div>
				<p>Current Theme: {isDarkMode ? "dark" : "light"}</p>
				<p>Ternary Mode: {ternaryDarkMode}</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				Toggle between three modes
				<button
					className="w-48 rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={toggleTernaryDarkMode}
				>
					Toggle from {ternaryDarkMode}
				</button>
			</div>
			<div className="flex flex-col items-center justify-center">
				Select a mode
				<br />
				<select
					className="w-32 rounded-md bg-primary p-1 text-primary-foreground"
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
