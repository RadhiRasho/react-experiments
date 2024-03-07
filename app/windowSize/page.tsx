"use client";
import { Browser } from "@/components/Browser";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Home() {
	const { width, height } = useWindowSize();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 text-red-500">
			<div>
				<h2>Width: {width}</h2>
				<h2>Height: {height}</h2>
			</div>

			<Browser width={width} height={height} />
		</main>
	);
}
