import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			className="toaster group"
			theme={theme as ToasterProps["theme"]}
			toastOptions={{
				classNames: {
					toast:
						"group toast group-[.toaster]:shadow-lg group-[.toaster]:bg-neutral-950 group-[.toaster]:text-neutral-50 group-[.toaster]:border-neutral-800",
					description: "group-[.toast]:text-neutral-400",
					actionButton:
						"group-[.toast]:bg-neutral-50 group-[.toast]:text-neutral-900",
					cancelButton:
						"group-[.toast]:bg-neutral-800 group-[.toast]:text-neutral-400"
				}
			}}
			{...props}
		/>
	);
};

export { Toaster };
