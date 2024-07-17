function GenerateNumberArray() {
	return Array.from({ length: 10 }, (_, i) => i + 1);
}

export default function TailWind() {
	const data = GenerateNumberArray();

	return (
		<main className="flex w-[94vw] items-center justify-center bg-dark mt-10 mx-10">
			<ul className="flex w-full gap-12">
				{data.map((x) => (
					<li
						key={x}
						className="w-full hover:shadow-sm size-10 rounded-full border border-blue-600 text-center content-center bg-cyan-600 hover:bg-cyan-600/45"
					>
						{x}
					</li>
				))}
			</ul>
		</main>
	);
}
