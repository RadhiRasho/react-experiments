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
		<div className="flex flex-col items-center gap-2">
			<h1>Click to copy:</h1>
			<div className="flex items-baseline justify-center gap-1 *:w-16">
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => handleCopy("A")}
				>
					A
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => handleCopy("B")}
				>
					B
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => handleCopy("C")}
				>
					C
				</button>
			</div>
			<div className="flex items-baseline justify-center gap-1">
				Copied value:{" "}
				{copiedText ? (
					<span className="flex w-8 justify-center rounded-md bg-red-500 p-1">{copiedText}</span>
				) : (
					<span>Nothing is copied yet!</span>
				)}
			</div>
		</div>
	);
}
