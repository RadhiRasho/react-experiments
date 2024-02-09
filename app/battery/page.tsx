"use client";

import Battery from "@/components/Battery";
import { cn } from "@/lib/utils";
import { useBattery } from "@uidotdev/usehooks";

export default function Home() {
	const { charging, dischargingTime, chargingTime, level, loading, supported } = useBattery();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-red-500">
			<div>
				{!loading && level ? (
					<Battery
						level={level * 100}
						charging={charging}
						chargingTime={chargingTime}
						dischargingTime={dischargingTime}
						supported={supported}
					/>
				) : (
					<h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={cn("animate-spin", "text-red-500")}
						>
							<title>Loading...</title>
							<path d="M21 12a9 9 0 1 1-6.219-8.56" />
						</svg>
					</h2>
				)}
			</div>
		</main>
	);
}
