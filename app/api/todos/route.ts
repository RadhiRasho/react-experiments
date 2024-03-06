import type { Todo } from "@/types";

import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse<Todo[]>> {
	const params = req.nextUrl.searchParams;
	const limit = params.get("limit") ?? "5";
	const offset = params.get("offset") ?? "0";

	const res = await fetch(`http://localhost:3001/?limit=${limit}&offset=${offset}`);

	const data = await res.json();

	return NextResponse.json(data);
}
