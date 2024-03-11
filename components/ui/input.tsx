import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors disabled:cursor-not-allowed dark:border-slate-800 file:border-0 file:bg-transparent file:font-medium dark:placeholder:text-slate-400 file:text-sm placeholder:text-slate-500 disabled:opacity-50 focus-visible:outline-none dark:focus-visible:ring-slate-300 focus-visible:ring-1 focus-visible:ring-slate-950",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
