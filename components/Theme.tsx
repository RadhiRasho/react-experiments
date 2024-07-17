"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="Toggle Dark Mode"
			className="hover:bg-transparent transition-all animate-in text-red-500 text-xs flex justify-end"
		>
			<Sun
				strokeWidth={1.75}
				size={30}
				onClick={() => setTheme("dark")}
				className="rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
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
