"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { NavMenu } from "@/components/NavMenu";

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<NavMenu>
					{children}
					<ReactQueryDevtools position="left" initialIsOpen={false} />
					<Toaster duration={2500} position="bottom-left" closeButton />
				</NavMenu>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
