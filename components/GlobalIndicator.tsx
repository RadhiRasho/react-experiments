"use client";
import { useIsFetching } from "@tanstack/react-query";

export default function GlobalIndicator({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isFetching = useIsFetching();
	return (
		<>
			<div className="absolute top-5 right-5">
				{isFetching > 0 ? (
					<div className="flex text-red-500 w-14 items-center justify-between">
						{isFetching}{" "}
						<div className="bg-red-500 rounded-full flex justify-center items-center h-6 w-6 shadow-[0_0_25px] shadow-red-500">
							<div className="bg-red-500 rounded-full h-5 w-5 motion-safe:animate-ping-slow">{""}</div>
						</div>
					</div>
				) : (
					<div className="flex text-red-500 w-14 items-center justify-between">
						{isFetching} <div className="bg-red-500 rounded-full flex justify-center items-center h-6 w-6">{""}</div>
					</div>
				)}
			</div>
			{children}
		</>
	);
}