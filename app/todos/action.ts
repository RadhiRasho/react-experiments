import type { Todo, TodoCreate } from "@/types/Todo";

export async function createTodo({ taskName, description }: TodoCreate): Promise<string> {
	const res = await fetch("/api/todos/", {
		method: "POST",
		body: JSON.stringify({ taskName, description }),
		headers: { "Content-Type": "application/json" },
	});
	const data = await res.json();

	return data.message;
}

export async function deleteTodo(taskId: number): Promise<string> {
	const res = await fetch("/api/todos", { method: "DELETE", body: JSON.stringify({ taskId }) });

	const data = await res.json();

	return data.message;
}

export async function updateTodo(values: Todo) {
	console.log(values);
	const res = await fetch("/api/todos/", { method: "PUT", body: JSON.stringify(values) });
	const data = await res.json();

	return data.message;
}

export async function getTodos(): Promise<Todo[]> {
	const res = await fetch("/api/todos");
	const data = await res.json();

	return data;
}
