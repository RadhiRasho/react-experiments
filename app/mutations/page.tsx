"use client";
import { TodoCard } from "@/components/TodoCard";
import type { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function Mutation() {
	const { data, isSuccess, isError, isPending, error } = useQuery<Todo[]>({
		queryKey: ["todos"],
		queryFn: async (): Promise<Todo[]> => {
			const res = await fetch("/api/todos?limit=10&offset=0");

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
					<div className="grid gap-4 grid-cols-5">
						{data.map((x) => {
							return <TodoCard key={x.taskId} description={x.description} taskId={x.taskId} taskName={x.taskName} />;
						})}
					</div>
				</div>
			)}
		</main>
	);
}
