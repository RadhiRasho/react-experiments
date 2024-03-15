"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="Toggle Dark Mode"
			className="hover:bg-transparent text-red-500 flex justify-end"
		>
			<SunIcon
				width={20}
				onClick={() => setTheme("dark")}
				className="h-full rotate-0 scale-100 active:animate-in active:animate-rotate transition-all dark:-rotate-90 dark:scale-0"
			/>
			<MoonIcon
				width={20}
				onClick={() => setTheme("light")}
				className="h-full absolute rotate-90 scale-0 active:animate-rotate transition-all dark:rotate-0 dark:scale-100"
			/>
		</Button>
	);
}
