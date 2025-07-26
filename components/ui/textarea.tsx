import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"flex min-h-[60px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-xs disabled:cursor-not-allowed dark:border-slate-800 dark:placeholder:text-slate-400 placeholder:text-slate-500 disabled:opacity-50 focus-visible:outline-hidden dark:focus-visible:ring-slate-300 focus-visible:ring-1 focus-visible:ring-slate-950",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
