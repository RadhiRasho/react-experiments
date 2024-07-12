import { useCopyToClipboard } from "usehooks-ts";

export default function CopyToClipboard() {
	const [copiedText, copy] = useCopyToClipboard();

	async function handleCopy(text: string) {
		try {
			await copy(text);
			console.log("Copied!", { text });
		} catch (error) {
			console.error("Failed to copy!", error);
		}
	}

	return (
		<div className="flex gap-2 items-center flex-col">
			<h1>Click to copy:</h1>
			<div className="flex gap-1 justify-center items-baseline *:w-16">
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => handleCopy("A")}
				>
					A
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => handleCopy("B")}
				>
					B
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={() => handleCopy("C")}
				>
					C
				</button>
			</div>
			<div className="flex gap-1 justify-center items-baseline">
				Copied value:{" "}
				{copiedText ? (
					<span className="bg-red-500 p-1 rounded-md flex justify-center w-8">
						{copiedText}
					</span>
				) : (
					<span>Nothing is copied yet!</span>
				)}
			</div>
		</div>
	);
}