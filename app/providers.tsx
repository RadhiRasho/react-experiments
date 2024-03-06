"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import GlobalIndicator from "@/components/GlobalIndicator";

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalIndicator>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</GlobalIndicator>
		</QueryClientProvider>
	);
}
