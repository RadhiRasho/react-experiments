"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export type Repo = {
	name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	subscribers_count: number;
};

export default function Home() {
	const [count, setCount] = useState(0);
	const { isPending, error, data, isSuccess, isError } = useQuery<Repo>({
		queryKey: ["repoData", count],
		queryFn: async (data): Promise<Repo> => {
			const res = await fetch("https://api.github.com/repos/TanStack/query");

			if (count > 10) {
				throw new Error("Count is too high");
			}

			return await res.json();
		},
		gcTime: 1000,
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-red-500">
			{isPending && <div>Loading...</div>}
			{isError && <div>Error: {error.message}</div>}
			{isSuccess && (
				<div>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
					<strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
					<strong>🍴 {data.forks_count}</strong>
				</div>
			)}
			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
		</main>
	);
}
