import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"flex min-h-[60px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm disabled:cursor-not-allowed dark:border-slate-800 dark:placeholder:text-slate-400 placeholder:text-slate-500 disabled:opacity-50 focus-visible:outline-none dark:focus-visible:ring-slate-300 focus-visible:ring-1 focus-visible:ring-slate-950",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
