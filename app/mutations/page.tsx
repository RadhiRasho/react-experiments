"use client";
import type { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function Mutation() {
	const { data, isSuccess, isError, isPending, error } = useQuery<Todo[]>({
		queryKey: ["todos"],
		queryFn: async (): Promise<Todo[]> => {
			const res = await fetch("/api/todos?limit=2&offset=0");

			const data = await res.json();

			return data;
		},
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly p-24 bg-black text-white">
			{isPending && <div>Loading...</div>}
			{isError && <div>{error?.message}</div>}

			{isSuccess && (
				<div>
					<h1>Todos: </h1>
					<ul>
						{data.map((x) => {
							return (
								<li key={x.taskId}>
									<div>{x.taskId}</div>
									<div>{x.taskName}</div>
									<p>{x.description}</p>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</main>
	);
}
