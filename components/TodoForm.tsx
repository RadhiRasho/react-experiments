import type { TodoCreate } from "@/types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
	taskName: z.string().min(2, {
		message: "Task Name is too short.",
	}),
	description: z.string().min(10, {
		message: "Description is too short.",
	}),
});

type TodoFormProps = {
	action: (values: TodoCreate) => Promise<string>;
};

export function TodoForm({ action }: TodoFormProps) {
	const queryClient = useQueryClient();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { taskName: "", description: "" },
	});

	async function submit(values: z.infer<typeof formSchema>) {
		const data = await action(values);

		await queryClient.refetchQueries({ queryKey: ["todos"] });

		toast.info(data);
	}

	return (
		<div className="w-full">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(submit)} className="space-y-4 rounded-xl border p-4">
					<FormField
						control={form.control}
						name="taskName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Task Name</FormLabel>
								<FormControl>
									<Input placeholder="Something Fun" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Really Fun Thing" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
