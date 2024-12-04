import * as React from "react";
import { cn } from "@udecode/cn";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, reference) => {
		return (
			<input
				ref={reference}
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-neutral-800 bg-neutral-950 ring-offset-neutral-950 file:text-neutral-50 placeholder:text-neutral-400 focus-visible:ring-neutral-300",
					className
				)}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
