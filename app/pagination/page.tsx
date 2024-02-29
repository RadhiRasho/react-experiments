"use client";
import type { RandomUser } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Pagination() {
	const [page, setPage] = useState(1);

	const { isPending, error, data, isSuccess } = useQuery({
		queryKey: ["repoData", page],
		queryFn: async (): Promise<RandomUser> => {
			const res = await fetch(`https://randomuser.me/api?results=10&page=${page}`);
			const data = await res.json();
			return data;
		},
		placeholderData: keepPreviousData,
		staleTime: 3000,
		gcTime: 3000,
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-24 bg-black text-white">
			<h1>Pagination</h1>
			{isPending ? (
				<p>Loading...</p>
			) : isSuccess ? (
				<>
					<ul>
						{data.results.map((user) => (
							<li key={user.login.uuid}>
								{user.name.first} {user.name.last}
							</li>
						))}
						{data.info.page}
					</ul>
					<div className="flex justify-between w-36">
						<button type="button" onClick={() => setPage((prev) => prev - 1)}>
							Back
						</button>
						<button type="button" onClick={() => setPage((prev) => prev + 1)}>
							Next
						</button>
					</div>
				</>
			) : (
				<p>{error?.message}</p>
			)}
		</main>
	);
}