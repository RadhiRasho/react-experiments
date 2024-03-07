"use client";
import { useIsFetching } from "@tanstack/react-query";

export default function GlobalIndicator() {
	const isFetching = useIsFetching();
	return (
		<>
			{isFetching ? (
				<div className="flex text-red-500 w-9 items-center justify-between">
					{isFetching}{" "}
					<div className="bg-red-500 rounded-full flex justify-center items-center h-4 w-4 shadow-[0_0_20px] shadow-red-500">
						<div className="bg-red-500 rounded-full h-4 w-4 motion-safe:animate-ping-slow">{""}</div>
					</div>
				</div>
			) : (
				<div className="flex text-red-500 w-9 items-center justify-between">
					{isFetching} <div className="bg-red-500 rounded-full flex justify-center items-center h-4 w-4">{""}</div>
				</div>
			)}
		</>
	);
}
