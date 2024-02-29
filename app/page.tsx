"use client";

import type { RandomUser, Repo } from "@/types";
import { queryOptions, useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);
	const { isPending, error, data, isSuccess, isError } = useQuery<Repo>({
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
		// enabled: count > 5, // This is a way to disable the query until it's dependencies match a certain criteria
	});

	const { data: names } = useQuery({
		queryKey: ["users", count],
		queryFn: async (): Promise<RandomUser> => {
			return fetch(`https://randomuser.me/api?results=${count}`).then((res) => res.json());
		},
		select: (data) => data.results.map((x) => `${x.name.first} ${x.name.last}`),
		staleTime: 3000, // This is the time in ms that the query will be considered fresh
	});

	const users = useQueries({
		queries: names
			? names.map((name) => {
					return queryOptions({
						queryKey: ["user", name],
						queryFn: async () => {
							return name;
						},
						staleTime: 3000,
					});
			  })
			: [],
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
			{users.length > 0 && users?.map((user, i) => <div key={`user-${i * 2}`}>{user.data}</div>)}
			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
		</main>
	);
}
