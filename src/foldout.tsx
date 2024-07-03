"use client";

import { Slot } from "@radix-ui/react-slot";
import { composeRefs, withRef } from "@udecode/react-utils";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { type RefObject, createContext, useRef, useContext } from "react";
import { cn } from "@udecode/cn";

interface FoldoutContext {
	triggerRef: RefObject<HTMLButtonElement>;
	contentRef: RefObject<HTMLDivElement>;
	shouldStyle: boolean;
	state: [boolean | undefined, (value: boolean | undefined) => void];
}

const FoldoutContext = createContext<FoldoutContext | null>(null);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const useFoldout = () => useContext(FoldoutContext)!;

const FoldoutStyle = cn("flex flex-col border border-neutral-800 rounded");
export const Foldout = withRef<
	"div",
	{
		open?: boolean;
		onOpenChange?: (value: boolean) => void;
		defaultOpen?: boolean;
		noStyles?: boolean;
	}
>(
	(
		{
			open,
			onOpenChange,
			defaultOpen = false,
			noStyles = false,
			children,
			className,
			...props
		},
		reference
	) => {
		const triggerReference = useRef<HTMLButtonElement>(null);
		const contentReference = useRef<HTMLDivElement>(null);
		const shouldStyle = !noStyles;
		const [state, setState] = useControllableState({
			prop: open,
			onChange: onOpenChange,
			defaultProp: defaultOpen
		});

		return (
			<FoldoutContext.Provider
				value={{
					triggerRef: triggerReference,
					contentRef: contentReference,
					state: [state, setState],
					shouldStyle
				}}
			>
				<div
					{...props}
					className={cn(shouldStyle && FoldoutStyle, className)}
					ref={reference}
				>
					{children}
				</div>
			</FoldoutContext.Provider>
		);
	}
);

const FoldoutTriggerStyle = cn(
	"rounded p-4 text-left cursor-pointer hover:bg-neutral-900 transition-colors ring-offset-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2"
);

export const FoldoutTrigger = withRef<
	"button",
	{ asChild?: boolean; disabled?: boolean }
>(({ asChild, className, disabled, ...props }, reference) => {
	const {
		triggerRef,
		shouldStyle,
		state: [open, setOpen]
	} = useFoldout();
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={cn(shouldStyle && FoldoutTriggerStyle, className)}
			ref={composeRefs(reference, triggerRef)}
			{...props}
			onClick={() => {
				if (disabled) return;
				setOpen(!open);
			}}
		/>
	);
});

const FoldoutContentStyle = cn(
	"border-t border-neutral-800 rounded-b p-4 text-left"
);
export const FoldoutContent = withRef<"div", { asChild?: boolean }>(
	({ asChild, className, ...props }, reference) => {
		const {
			contentRef,
			shouldStyle,
			state: [open]
		} = useFoldout();
		const Comp = asChild ? Slot : "div";

		return (
			<Comp
				ref={composeRefs(reference, contentRef)}
				className={cn(
					shouldStyle && FoldoutContentStyle,
					open ? "visible" : "hidden",
					className
				)}
				{...props}
			/>
		);
	}
);
