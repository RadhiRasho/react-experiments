"use client";
import type { RandomUser } from "@/types";
import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Pagination() {
	const [page, setPage] = useState(1);

	const { isPending, error, data, isSuccess } = useQuery<RandomUser>({
		queryKey: ["users", page],
		queryFn: async () => {
			const res = await fetch(`https://randomuser.me/api?results=10&page=${page}`);
			const data = await res.json();
			return data;
		},
		placeholderData: keepPreviousData,
		staleTime: 3000,
		gcTime: 3000,
	});

	const {
		data: infiniteData,
		hasNextPage,
		hasPreviousPage,
		fetchPreviousPage,
		fetchNextPage,
		isSuccess: infiniteIsSuccess,
	} = useInfiniteQuery<RandomUser>({
		queryKey: ["infiniteUsers", page],
		queryFn: async ({ pageParam }) => {
			setPage(pageParam as number);
			const res = await fetch(`https://randomuser.me/api?results=10&page=${pageParam}`);
			const data = await res.json();
			return data;
		},
		staleTime: 3000,
		gcTime: 3000,
		initialPageParam: page,
		getNextPageParam: (lastPage) => lastPage.info.page + 1,
		getPreviousPageParam: (firstPage, allPages) => firstPage.info.page - 1,
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-24 bg-black text-white">
			{/* <h1>Pagination</h1>
			{isPending && <div className="text-blue-500">Loading...</div>}
			{error && <div className="text-red-500">{error?.message}</div>}
			{isSuccess && (
				<>
					<ul className="text-center">
						{data.results.map((user) => (
							<li key={user.login.uuid}>
								{user.name.first} {user.name.last}
							</li>
						))}
					</ul>

					<div className="flex justify-between w-36">
						<button type="button" onClick={() => setPage((prev) => prev - 1)}>
							Back
						</button>
						{data.info.page}
						<button type="button" onClick={() => setPage((prev) => prev + 1)}>
							Next
						</button>
					</div>
				</>
			)} */}

			<h1>Infinite Pagination</h1>
			{infiniteIsSuccess && (
				<>
					<ul className="text-center">
						{infiniteData.pages[page]?.results.map((user) => {
							return (
								<li key={user.login.uuid}>
									{user.name.first} {user.name.last}
								</li>
							);
						})}
					</ul>
				</>
			)}
			<div className="flex justify-between w-36">
				{hasPreviousPage && (
					<button type="button" onClick={() => fetchPreviousPage()}>
						Previous
					</button>
				)}
				{page}
				{hasNextPage && (
					<button type="button" onClick={() => fetchNextPage()}>
						Next
					</button>
				)}
			</div>
		</main>
	);
}