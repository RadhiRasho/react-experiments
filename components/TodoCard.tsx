import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import type { Todo } from "@/types/Todo";
import { TodoCardForm } from "./TodoCardForm";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

type TodoCardProps = {
	deleteAction: (taskId: number) => Promise<string>;
	updateAction: (values: Todo) => Promise<string>;
} & Todo;

export function TodoCard({
	updateAction,
	deleteAction,
	description,
	taskId,
	taskName,
}: TodoCardProps) {
	const queryClient = useQueryClient();

	const [edit, setEdit] = useState(false);

	async function deleteTodo(taskId: number) {
		const message = await deleteAction(taskId);

		toast.info(message);

		await queryClient.refetchQueries({
			queryKey: ["todos"],
		});
	}

	return (
		<Card
			key={taskId}
			className="hover:-translate-x-1 hover:-translate-y-1 flex min-h-full h-fit min-w-72 flex-col justify-between md:hover:z-50 md:hover:animate-in md:hover:duration-350"
		>
			{edit ? (
				<TodoCardForm
					cancelEdit={() => setEdit(false)}
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
						<CardContent className="w-full">
							<CardDescription className="w-full break-words">
								{description}
							</CardDescription>
						</CardContent>
					</div>
					<CardFooter className="flex justify-between">
						<Button
							title="Edit Task"
							onClick={() => setEdit(!edit)}
							variant="secondary"
						>
							<Pencil2Icon className="text-xl" />
						</Button>
						<Button
							title="Delete Task"
							onClick={() => deleteTodo(taskId)}
							variant="destructive"
						>
							<TrashIcon className="text-xl" />
						</Button>
					</CardFooter>
				</>
			)}
		</Card>
	);
}
