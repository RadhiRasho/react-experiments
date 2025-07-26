import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm shadow-xs transition-colors disabled:cursor-not-allowed dark:border-slate-800 file:border-0 file:bg-transparent file:font-medium dark:placeholder:text-slate-400 file:text-sm placeholder:text-slate-500 disabled:opacity-50 focus-visible:outline-hidden dark:focus-visible:ring-slate-300 focus-visible:ring-1 focus-visible:ring-slate-950",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
