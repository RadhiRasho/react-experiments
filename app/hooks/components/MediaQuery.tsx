import { Laptop, Monitor, Phone, Tablet } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export default function MediaQuery() {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)", { initializeWithValue: false });
	const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)", {
		initializeWithValue: false,
	});
	const isLargeDevice = useMediaQuery("only screen and (min-width : 993px) and (max-width : 1200px)", {
		initializeWithValue: false,
	});
	const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)", { initializeWithValue: false });

	return (
		<div className="grid grid-cols-2 justify-between gap-10 ">
			<div className="flex flex-col items-center gap-10">
				<figure
					className={`flex flex-col items-center justify-center ${isSmallDevice && "text-red-500 dark:text-green-500"}`}
				>
					<Phone />
					<figcaption>Small</figcaption>
				</figure>
				<figure
					className={`flex flex-col items-center justify-center ${isMediumDevice && "text-red-500 dark:text-green-500"}`}
				>
					<Tablet />
					<figcaption>Medium</figcaption>
				</figure>
			</div>
			<div className="flex flex-col items-center gap-10">
				<figure
					className={`flex flex-col items-center justify-center ${isLargeDevice && "text-red-500 dark:text-green-500"}`}
				>
					<Laptop />
					<figcaption>Large</figcaption>
				</figure>
				<figure
					className={`flex flex-col items-center justify-center ${isExtraLargeDevice && "text-red-500 dark:text-green-500"}`}
				>
					<Monitor />
					<figcaption>Extra Large</figcaption>
				</figure>
			</div>
		</div>
	);
}
