"use client";

import type { RandomUser, Repo } from "@/types/RandomUser";
import { queryOptions, useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);

	const { isPending, error, data, isSuccess, isError, refetch } = useQuery<Repo>({
		queryKey: ["repoData", count], // Query Keys are similar to Dependency Arrays in useEffect
		queryFn: async ({ queryKey }): Promise<Repo> => {
			const [_key, countKey] = queryKey as [string, number];

			if (countKey > 20) {
				throw new Error("This is an error");
			}

			if (countKey > 15) {
				return Promise.reject(new Error("This is an error but from a promise"));
			}

			const res = await fetch("https://api.github.com/repos/TanStack/query");

			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			return res.json();
		},
		staleTime: 3000, // This is the time in ms that the query will be considered fresh
		gcTime: 3000, // This is the time in ms that the query will be garbage collected
		// This is a way to disable the query until it's dependencies match a certain criteria
		// can also be disabled in this case due to refetch
		enabled: count <= 16,
	});

	const { data: names } = useQuery({
		queryKey: ["user", count],
		queryFn: async (): Promise<RandomUser> => {
			const res = await fetch(`https://randomuser.me/api?results=${count}`);
			const data = await res.json();
			return data;
		},
		refetchOnWindowFocus: false, // This is a way to disable the query from refetching when the window is focused
		select: (data) => data.results.map((x) => `${x.name.first} ${x.name.last}`),
		staleTime: 3000, // This is the time in ms that the query will be considered fresh
		gcTime: 3000, // This is the time in ms that the query will be garbage collected
	});

	const users = useQueries({
		queries: names
			? names.map((name) => {
					return queryOptions({
						queryKey: ["user", name],
						queryFn: async () => name,
						refetchOnWindowFocus: false,
						staleTime: 3000,
						gcTime: 3000,
					});
			  })
			: [],
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-24">
			<button type="button" className="h-10 w-32 rounded-lg border border-white" onClick={() => refetch()}>
				Refetch Repo
			</button>
			{isPending && <span className="text-blue-500">Loading...</span>}
			{isError && <span className="text-red-500">Error: {error.message}</span>}
			{isSuccess && (
				<div>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
					<strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
					<strong>🍴 {data.forks_count}</strong>
				</div>
			)}
			{users.length > 0 && (
				<div className={`overflow-hidden text-center${users?.length > 16 ? "hover:overflow-y-scroll" : ""}h-96 w-56`}>
					{users?.length > 0 && users?.map((user, i) => <div key={`user-${i * 2}`}>{user.data}</div>)}
				</div>
			)}
			<button
				type="button"
				className="h-10 w-32 rounded-lg border border-white active:translate-y-1 active:animate-in"
				onClick={() => setCount((c) => c + 1)}
			>
				Increment
			</button>
		</main>
	);
}
