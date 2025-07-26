"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="Toggle Dark Mode"
			className="flex animate-in justify-end text-red-500 text-xs transition-all hover:bg-transparent"
		>
			<Sun
				strokeWidth={1.75}
				size={30}
				onClick={() => setTheme("dark")}
				className="dark:-rotate-90 rotate-0 scale-100 transition-transform dark:scale-0"
			/>
			<Moon
				strokeWidth={1.75}
				size={30}
				onClick={() => setTheme("light")}
				className="absolute rotate-100 scale-0 transition-transform dark:rotate-0 dark:scale-100"
			/>
		</Button>
	);
}
