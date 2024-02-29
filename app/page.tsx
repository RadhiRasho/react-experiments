"use client";

import type { RandomUser, Repo } from "@/types";
import { queryOptions, useIsFetching, useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);
	const isFetching = useIsFetching();

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
		gcTime: 3000, // This is the time in ms that the query will be garbage collected
		// enabled: count > 5, // This is a way to disable the query until it's dependencies match a certain criteria
	});

	const { data: names } = useQuery({
		queryKey: ["user", count],
		queryFn: async (): Promise<RandomUser> => {
			const res = await fetch(`https://randomuser.me/api?results=${count}`);
			const data = await res.json();
			return data;
		},
		select: (data) => data.results.map((x) => `${x.name.first} ${x.name.last}`),
		staleTime: 3000, // This is the time in ms that the query will be considered fresh
		gcTime: 3000, // This is the time in ms that the query will be garbage collected
	});

	const usersQ = useQueries({
		queries: names
			? names.map((name) => {
					return queryOptions({
						queryKey: ["users", name],
						queryFn: async () => name,
						staleTime: 3000,
						gcTime: 3000,
					});
			  })
			: [],
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-24 bg-black text-white">
			<div className="absolute top-10 right-10">
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
			{/* {isPending && <span>Loading...</span>}
			{isError && <span className="text-red-500">Error: {error.message}</span>}
			{isSuccess && (
				<div>
					<h1>{data.name}</h1>
					<p>{data.description}</p>
					<strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
					<strong>🍴 {data.forks_count}</strong>
				</div>
			)} */}
			{usersQ.length > 0 && (
				<div className={`overflow-hidden ${usersQ?.length > 16 ? "hover:overflow-y-scroll" : ""} h-96 w-56`}>
					{usersQ?.length > 0 && usersQ?.map((user, i) => <div key={`user-${i * 2}`}>{user.data}</div>)}
				</div>
			)}
			<button
				type="button"
				className="border border-white w-32 h-10 rounded-full active:animate-in active:translate-y-1"
				onClick={() => setCount((c) => c + 1)}
			>
				Increment
			</button>
		</main>
	);
}
