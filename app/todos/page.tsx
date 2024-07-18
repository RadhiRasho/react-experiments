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
		<main className="flex min-h-screen md:flex-row md:items-start  xs:flex-col xs:items-center justify-between gap-1 md:px-6 pt-6">
			<div className="md:w-2/12 xs:w-full">
				<TodoForm action={createTodo} />
			</div>
			<br />
			<div className="md:w-10/12 w-full">
				{isPending && <div>Loading...</div>}
				{isError && <div>{error?.message}</div>}
				{isSuccess && (
					<div className="grid md:grid-cols-4 xs:auto-cols-auto grid-rows-auto gap-3 px-6 pb-4">
						{data.length > 0 ? (
							data.map((x) => {
								return <TodoCard updateAction={updateTodo} deleteAction={deleteTodo} key={x.taskId} {...x} />;
							})
						) : (
							<div>Nothing To Do...</div>
						)}
					</div>
				)}
			</div>
		</main>
	);
}
