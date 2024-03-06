type BrowserProps = {
	width: number | null;
	height: number | null;
};

export function Browser({ width, height }: BrowserProps) {
	if (!width || !height) {
		return null;
	}

	return (
		<div
			className={"bg-gray-800 rounded-lg border border-white grid place-content-center"}
			style={{ height: height / 4, width: width / 4 }}
		>
			hello
		</div>
	);
}
