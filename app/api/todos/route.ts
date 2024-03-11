
import type { Todo } from "@/types/Todo";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse<Todo[]>> {
	const params = req.nextUrl.searchParams;
	const limit = params.get("limit");
	const offset = params.get("offset") ?? "0";

	const res = await fetch(`http://localhost:3001/?limit=${limit}&offset=${offset}`);

	const data = await res.json();

	return NextResponse.json(data);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
	const body = await req.json();

	const res = await fetch("http://localhost:3001/create", {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" },
	});

	const data = await res.text();

	console.log(data);

	return NextResponse.json({ message: data });
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
	const { taskId } = await req.json();

	const res = await fetch(`http://localhost:3001/delete/${taskId}`, { method: "DELETE" });

	const data = await res.text();

	return NextResponse.json({ message: data });
}
