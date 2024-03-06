import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type TodoCardProps = {
	taskId: number;
	taskName: string;
	description: string;
};

export function TodoCard({ description, taskId, taskName }: TodoCardProps) {
	return (
		<Card className="w-fit max-h-fit hover:animate-in hover:-translate-x-1  hover:-translate-y-2">
			<CardHeader>
				<CardTitle>{taskName}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{description}</CardDescription>
			</CardContent>
		</Card>
	);
}