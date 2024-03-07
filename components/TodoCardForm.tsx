import type { Todo } from "@/types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Cross1Icon, PaperPlaneIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
	taskName: z.string().min(2, {
		message: "Task Name is too short.",
	}),
	description: z.string().min(10, {
		message: "Description is too short.",
	}),
});

type TodoCardFormProps = {
	action: (values: Todo) => Promise<string>;
	taskId: number;
	taskName: string;
	description: string;
	cancelEdit: () => void;
};

export function TodoCardForm({ cancelEdit, action, taskId, taskName, description }: TodoCardFormProps) {
	const queryClient = useQueryClient();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { taskName, description },
	});

	async function submit(values: z.infer<typeof formSchema>) {
		const data = await action({ ...values, taskId });

		await queryClient.refetchQueries({ queryKey: ["todos"] });

		toast.info(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submit)} className="h-full flex justify-between flex-col">
				<div>
					<CardHeader>
						<CardTitle>
							<FormField
								control={form.control}
								name="taskName"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder="Something Fun" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea className="text-slate-400 pb-0" placeholder="Really Fun Thing" {...field} rows={10} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardDescription>
					</CardContent>
				</div>
				<CardFooter className="flex justify-between">
					<Button title="Cancel Edit" variant="secondary" onClick={cancelEdit}>
						<Cross1Icon className="text-xl" />
					</Button>
					<Button className="bg-green-500 hover:bg-green-500" title="Submit Edit" type="submit">
						<PaperPlaneIcon className="text-xl" />
					</Button>
				</CardFooter>
			</form>
		</Form>
	);
}
