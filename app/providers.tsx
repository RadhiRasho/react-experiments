"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { type ReactNode, useState } from "react";
import { NavMenu } from "@/components/NavMenu";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				<NavMenu>
					{children}
					<Toaster duration={2500} position="bottom-right" closeButton />
				</NavMenu>
			</ThemeProvider>
			<ReactQueryDevtools buttonPosition="bottom-left" position="left" initialIsOpen={false} />
		</QueryClientProvider>
	);
}
