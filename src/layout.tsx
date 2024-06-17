import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			className="flex min-h-screen w-full select-none flex-col bg-neutral-950"
			vaul-drawer-wrapper=""
		>
			{children}
		</main>
	);
}
