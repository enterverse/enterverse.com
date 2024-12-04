import Navbar from "./components/navbar";

import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main
			className="bg-gradient-overall flex min-h-screen w-full select-none flex-col"
			vaul-drawer-wrapper=""
		>
			<Navbar />
			{children}
		</main>
	);
}
