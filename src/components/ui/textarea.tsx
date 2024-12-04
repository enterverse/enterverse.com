"use client";

import * as React from "react";
import { cn } from "@udecode/cn";

export type TextareaProps =
	React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
		useCustomCounter?: boolean;
		onRenderCounter?: (text: string) => number;
		maxCustom?: number;
	};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			className,
			maxLength,
			useCustomCounter,
			onRenderCounter,
			maxCustom,
			onChange,
			value,
			...props
		},
		reference
	) => {
		const [length, setLength] = React.useState(value?.toString().length ?? 0);
		const [custom, setCustom] = React.useState(
			onRenderCounter?.(value?.toString() ?? "") ?? 0
		);

		return (
			<div className="relative">
				<textarea
					ref={reference}
					value={value}
					className={cn(
						"flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-base file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 border-neutral-800 bg-neutral-950 ring-offset-neutral-950 placeholder:text-neutral-400 focus-visible:ring-neutral-300 transition-colors",
						maxLength && "!pr-8",
						className
					)}
					onChange={(event) => {
						setCustom(onRenderCounter?.(event.target.value) ?? 0);
						setLength(event.target.value.length);
						onChange?.(event);
					}}
					{...props}
				/>
				{maxLength && (
					<p
						className={cn(
							"absolute bottom-2 right-2 text-xs text-neutral-400 select-none",
							length > maxLength && "text-red-500"
						)}
					>
						{maxLength - length}
					</p>
				)}
				{useCustomCounter && (
					<p
						className={cn(
							"absolute bottom-2 right-2 text-xs text-neutral-400 select-none",
							maxCustom && custom > maxCustom && "text-red-500"
						)}
					>
						{maxCustom ? maxCustom - custom : custom}
					</p>
				)}
			</div>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
