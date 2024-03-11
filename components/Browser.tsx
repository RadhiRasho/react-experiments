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
			className={"grid place-content-center rounded-lg border border-white bg-gray-800"}
			style={{ height: height / 4, width: width / 4 }}
		>
			hello
		</div>
	);
}
