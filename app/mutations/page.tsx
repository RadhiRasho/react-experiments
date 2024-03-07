"use client";

import { TodoCard } from "@/components/TodoCard";
import type { Todo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./action";
import { TodoForm } from "@/components/TodoForm";


export default function Mutation() {

	const { data, isSuccess, isError, isPending, error } = useQuery<Todo[]>({
		queryKey: ["todos"],
		queryFn: () => getTodos(),
		staleTime: 20 * 1000,
	});

	return (
		<main className="flex min-h-screen flex-row gap-2 justify-between pt-16 px-16">
			<div className="w-2/12">
				<TodoForm action={createTodo} />
			</div>
			<br />
			<div className="w-10/12">
				{isPending && <div>Loading...</div>}
				{isError && <div>{error?.message}</div>}
				{isSuccess && (
					<div className="grid gap-3 grid-cols-4 grid-rows-5">
						{data.map((x) => {
							return <TodoCard updateAction={updateTodo} deleteAction={deleteTodo} key={x.taskId} {...x} />;
						})}
					</div>
				)}
			</div>
		</main>
	);
}
