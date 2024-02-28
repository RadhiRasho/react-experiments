"use client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const { isPending, error, data } = useQuery({
		queryKey: ["repoData"],
		queryFn: async () => {
			const res = await fetch("https://api.github.com/repos/TanStack/query");

			return await res.json();
		},
		staleTime: 1000 * 5,
		refetchInterval: 1000 * 5,
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-red-500">
			{isPending && <div>Loading...</div>}
			{error && <div>Error: {error?.message}</div>}
			{data && (
				<div>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
					<strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
					<strong>🍴 {data.forks_count}</strong>
				</div>
			)}
		</main>
	);
}
