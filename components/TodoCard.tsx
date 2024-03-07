import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { TodoCardForm } from "./TodoCardForm";
import type { Todo } from "@/types";

type TodoCardProps = {
	deleteAction: (taskId: number) => Promise<string>;
	updateAction: (values: Todo) => Promise<string>;
	taskId: number;
	taskName: string;
	description: string;
};

export function TodoCard({ updateAction, deleteAction, description, taskId, taskName }: TodoCardProps) {
	const queryClient = useQueryClient();

	const [edit, setEdit] = useState(false);

	async function deleteTodo(taskId: number) {
		const message = await deleteAction(taskId);

		toast.info(message);

		await queryClient.refetchQueries({
			queryKey: ["todos"],
		});
	}

	function cancelEdit() {
		setEdit(false);
	}

	return (
		<Card
			key={taskId}
			className=" flex flex-col justify-between min-w-72 min-h-full hover:z-50 hover:animate-in hover:-translate-x-1 hover:-translate-y-1 hover:duration-350"
		>
			{edit ? (
				<TodoCardForm
					cancelEdit={cancelEdit}
					taskId={taskId}
					taskName={taskName}
					description={description}
					action={updateAction}
				/>
			) : (
				<>
					<div>
						<CardHeader>
							<CardTitle>{taskName}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>{description}</CardDescription>
						</CardContent>
					</div>
					<CardFooter className="flex justify-between">
						<Button title="Edit Task" onClick={() => setEdit(!edit)} variant="secondary">
							<Pencil2Icon className="text-xl" />
						</Button>
						<Button title="Delete Task" onClick={() => deleteTodo(taskId)} variant="destructive">
							<TrashIcon className="text-xl" />
						</Button>
					</CardFooter>
				</>
			)}
		</Card>
	);
}