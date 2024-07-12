import { useDarkMode } from "usehooks-ts";

export default function DarkMode() {
	const { isDarkMode, toggle, enable, disable } = useDarkMode({
		defaultValue: true,
	});

	return (
		<div className="flex flex-col gap-2 flex-grow-0 justify-start items-center">
			<p>Current theme: {isDarkMode ? "dark" : "light"}</p>
			<div className="flex flex-col gap-1 justify-center items-baseline *:w-[8rem]">
				<button
					className="bg-white text-black p-1 hover:bg-white/90 rounded-md"
					type="button"
					onClick={enable}
				>
					Enable
				</button>
				<button
					className="bg-white text-black p-1 hover:bg-white/90 rounded-md"
					type="button"
					onClick={disable}
				>
					Disable
				</button>
				<button
					className="bg-white text-black p-1 hover:bg-white/90 rounded-md"
					type="button"
					onClick={toggle}
				>
					Toggle
				</button>
			</div>
		</div>
	);
}