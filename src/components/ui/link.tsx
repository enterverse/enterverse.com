import { cn } from "@udecode/cn";
import { withRef } from "@udecode/react-utils";
import { Link as RouterLink } from "react-router-dom";

export const Link = withRef<typeof RouterLink>(
	({ className, ...props }, reference) => (
		<RouterLink
			ref={reference}
			className={cn(
				"rounded-md ring-offset-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2",
				className
			)}
			{...props}
		/>
	)
);

export const ExternalLink = withRef<"a">(
	({ className, ...props }, reference) => (
		<a
			ref={reference}
			className={cn(
				"rounded-md ring-offset-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2",
				className
			)}
			{...props}
		/>
	)
);
