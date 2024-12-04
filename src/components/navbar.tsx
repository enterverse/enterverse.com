import {
	type MouseEvent as ReactMouseEvent,
	useCallback,
	useEffect,
	useRef,
	useState
} from "react";
import { cn } from "@udecode/cn";
import { AlignRight, X } from "lucide-react";

import EnterverseLogo from "@/assets/logos/enterverse-white-logo.webp";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export default function Navbar() {
	const [collapsed, _setCollapsed] = useState(false);
	const [menu, setMenu] = useState(false);
	const lastScrollY = useRef(window.scrollY);
	const blockCollapse = useRef(true);
	const blockCollapseTimeout = useRef<number | null>(null);

	const setCollapsed = useCallback(
		(value: boolean) => {
			if (blockCollapse.current) {
				if (blockCollapseTimeout.current) {
					window.clearTimeout(blockCollapseTimeout.current);
				}
				blockCollapseTimeout.current = window.setTimeout(() => {
					blockCollapse.current = false;
					blockCollapseTimeout.current = null;
				}, 250);
			} else {
				_setCollapsed(value);
			}
		},
		[_setCollapsed]
	);

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		const difference = lastScrollY.current - currentScrollY;
		const isScrollingDown = difference < 0;

		setCollapsed(isScrollingDown);
		lastScrollY.current = currentScrollY;
	}, [setCollapsed]);
	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			if (event.clientY < 150) {
				setCollapsed(false);
			}
		},
		[setCollapsed]
	);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [handleScroll, handleMouseMove]);

	const onScrollToHash = useCallback(
		(event: ReactMouseEvent<HTMLAnchorElement>) => {
			blockCollapse.current = true;
			const hash = event.currentTarget.hash;

			if (hash.length > 1) {
				// eslint-disable-next-line unicorn/prefer-query-selector
				const element = document.getElementById(hash.slice(1));
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}

			setMenu(false);
		},
		[setMenu]
	);

	return (
		<nav
			className={cn(
				"fixed left-0 top-0 z-50 flex h-32 w-full translate-y-0 duration-500 opacity-100 transition-all select-none flex-row items-center bg-gradient-to-b from-neutral-950 to-transparent xl:px-32 xl:pb-0 p-6",
				collapsed && "xl:-translate-y-full xl:opacity-0"
			)}
		>
			{/* Centered Enterverse Logo */}
			<div className="absolute left-1/2 z-[60] -translate-x-1/2">
				<img
					alt="Enterverse Logo"
					className="pointer-events-none h-auto w-60"
					src={EnterverseLogo}
				/>
			</div>

			{/* Desktop Nav Items */}
			<div className="ml-auto hidden h-full flex-row items-center *:flex *:h-full *:items-center *:justify-center *:px-7 *:transition-colors last:*:pr-0 xl:flex">
				<Link
					className="hover:text-pink-400"
					to="#home"
					onClick={onScrollToHash}
				>
					Home
				</Link>
				<Link
					className="hover:text-pink-400"
					to="#enterlink"
					onClick={onScrollToHash}
				>
					Enterlink
				</Link>
				<Link
					className="hover:text-pink-400"
					to="#about"
					onClick={onScrollToHash}
				>
					About
				</Link>
				<Link
					className="hover:text-pink-400"
					to="#contact"
					onClick={onScrollToHash}
				>
					Contact
				</Link>
			</div>

			{/* Mobile Borger Button */}
			<Button
				className="relative z-[60] ml-auto flex h-full items-center justify-center pl-7 hover:text-pink-400 xl:hidden"
				size="none"
				variant="none"
				onClick={() => setMenu((previous) => !previous)}
			>
				{menu ? <X className="size-8" /> : <AlignRight className="size-8" />}
			</Button>

			{/* Mobile Fullscreen Menu */}
			<div
				className={cn(
					"fixed z-50 top-0 left-0 w-screen h-screen bg-gradient-mobile-nav p-8 flex flex-col items-end text-3xl font-semibold *:py-6 *:w-full text-right justify-center transition-all translate-x-full opacity-0 duration-300",
					menu && "xl:translate-x-full translate-x-0 xl:opacity-0 opacity-100"
				)}
			>
				<Link
					className="hover:text-pink-400"
					to="#home"
					onClick={onScrollToHash}
				>
					Home
				</Link>
				<Link
					className="hover:text-pink-400"
					to="#enterlink"
					onClick={onScrollToHash}
				>
					Enterlink
				</Link>
				<Link
					className="hover:text-pink-400"
					to="#about"
					onClick={onScrollToHash}
				>
					About
				</Link>
				<Link
					className="hover:text-pink-400"
					to="#contact"
					onClick={onScrollToHash}
				>
					Contact
				</Link>
			</div>
		</nav>
	);
}
