import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export default function DarkMode() {
	const { isDarkMode, toggle, enable, disable } = useDarkMode({
		defaultValue: true,
	});
	const { setTheme } = useTheme();

	useEffect(() => setTheme(isDarkMode ? "dark" : "light"), [isDarkMode, setTheme]);

	return (
		<div className="flex grow-0 flex-col items-center justify-start gap-2">
			<div>Current theme: {isDarkMode ? "dark" : "light"}</div>
			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={enable}
				>
					Enable
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={disable}
				>
					Disable
				</button>
				<button
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					type="button"
					onClick={toggle}
				>
					Toggle
				</button>
			</div>
		</div>
	);
}
