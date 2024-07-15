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
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<div>Current theme: {isDarkMode ? "dark" : "light"}</div>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-[8rem]">
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={enable}
				>
					Enable
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={disable}
				>
					Disable
				</button>
				<button
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					type="button"
					onClick={toggle}
				>
					Toggle
				</button>
			</div>
		</div>
	);
}
