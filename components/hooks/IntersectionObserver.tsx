import { useIntersectionObserver } from "usehooks-ts";

function Section(props: { title: string }) {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0.5,
	});

	// console.log(`Render Section ${props.title}`, {
	// 	isIntersecting,
	// });

	return (
		<div ref={ref} className="flex border border-dashed border-primary text-2xl">
			<div>{props.title}</div>
		</div>
	);
}

export default function IntersectionObserver() {
	return (
		<>
			{Array.from({ length: 5 }).map((_, index: number) => (
				<Section key={`${index + 1}`} title={`${index + 1}`} />
			))}
		</>
	);
}
