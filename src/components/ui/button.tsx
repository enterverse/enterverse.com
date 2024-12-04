import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@udecode/cn";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent text-sm font-medium ring-offset-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90",
				destructive: "bg-red-900 text-neutral-50 hover:bg-red-900/90",
				outline:
					"border-neutral-800 bg-neutral-950 hover:bg-neutral-800 hover:text-neutral-50",
				secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80",
				ghost: "hover:bg-neutral-800 hover:text-neutral-50",
				link: "text-neutral-50 underline-offset-4 hover:underline",
				pink: "bg-pink-600 text-neutral-50 hover:bg-pink-700",
				discord: "bg-[#5865F2] text-neutral-50 hover:bg-[#4054B2]",
				outlineWhite: "border-neutral-50 bg-transparent hover:bg-neutral-50/15",
				none: ""
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "size-10",
				none: ""
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, reference) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={reference}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
