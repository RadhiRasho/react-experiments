"use client";
import { useIsFetching } from "@tanstack/react-query";

export default function GlobalIndicator() {
	const isFetching = useIsFetching();
	return (
		<>
			{isFetching ? (
				<div className="flex w-9 items-center justify-between text-red-500">
					{isFetching}{" "}
					<div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 shadow-[0_0_20px] shadow-red-500">
						<div className="h-4 w-4 rounded-full bg-red-500 motion-safe:animate-ping-slow">{""}</div>
					</div>
				</div>
			) : (
				<div className="flex w-9 items-center justify-between text-red-500">
					{isFetching} <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500">{""}</div>
				</div>
			)}
		</>
	);
}
