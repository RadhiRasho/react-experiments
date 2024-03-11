"use client";

import { TodoCard } from "@/components/TodoCard";
import { TodoForm } from "@/components/TodoForm";
import type { Todo } from "@/types/Todo";
import { useQuery } from "@tanstack/react-query";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./action";

export default function Todos() {
	const { data, isSuccess, isError, isPending, error } = useQuery<Todo[]>({
		queryKey: ["todos"],
		queryFn: () => getTodos(),
		staleTime: 20 * 1000,
	});

	return (
		<main className="flex min-h-screen flex-row justify-between gap-2 px-16 pt-16">
			<div className="w-2/12">
				<TodoForm action={createTodo} />
			</div>
			<br />
			<div className="w-10/12">
				{isPending && <div>Loading...</div>}
				{isError && <div>{error?.message}</div>}
				{isSuccess && (
					<div className="grid grid-cols-4 grid-rows-5 gap-3">
						{data.map((x) => {
							return <TodoCard updateAction={updateTodo} deleteAction={deleteTodo} key={x.taskId} {...x} />;
						})}
					</div>
				)}
			</div>
		</main>
	);
}
