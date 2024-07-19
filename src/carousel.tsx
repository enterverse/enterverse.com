import { Slot } from "@radix-ui/react-slot";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { cn } from "@udecode/cn";
import { composeRefs, withRef } from "@udecode/react-utils";
import React, {
	type RefObject,
	createContext,
	useContext,
	useRef,
	useEffect,
	useCallback,
	useState
} from "react";

interface CarouselContext {
	backRef: RefObject<HTMLButtonElement>;
	nextRef: RefObject<HTMLButtonElement>;
	itemRefs: RefObject<Array<HTMLDivElement>>;
	containerRef: RefObject<HTMLDivElement>;
	scrollerRef: RefObject<HTMLDivElement>;
	state: [number | undefined, (value: number | undefined) => void];
}

const CarouselContext = createContext<CarouselContext | null>(null);
const useCarousel = () => useContext(CarouselContext)!;

export const Carousel = withRef<
	"div",
	{
		value?: number;
		onValueChange?: (value: number) => void;
		defaultValue?: number;
	}
>(
	(
		{ value, onValueChange, defaultValue = 0, className, ...props },
		reference
	) => {
		const containerReference = useRef<HTMLDivElement>(null);
		const scrollerReference = useRef<HTMLDivElement>(null);
		const backReference = useRef<HTMLButtonElement>(null);
		const nextReference = useRef<HTMLButtonElement>(null);
		const [state, setState] = useControllableState({
			prop: value,
			onChange: onValueChange,
			defaultProp: defaultValue
		});

		const itemReferences = useRef<Array<HTMLDivElement>>([]);

		return (
			<CarouselContext.Provider
				value={{
					containerRef: containerReference,
					scrollerRef: scrollerReference,
					backRef: backReference,
					nextRef: nextReference,
					itemRefs: itemReferences,
					state: [state, setState]
				}}
			>
				<div
					className={cn("flex flex-row", className)}
					ref={reference}
					{...props}
				/>
			</CarouselContext.Provider>
		);
	}
);

export const CarouselItems = withRef<"div">(
	({ className, children, ...props }, reference) => {
		const {
			itemRefs,
			scrollerRef,
			containerRef,
			state: [value, setValue]
		} = useCarousel();
		const [scrollPx, setScrollPx] = useState(0);

		const render = useCallback(() => {
			if (value === undefined) return;
			const container = containerRef.current;
			const scroller = scrollerRef.current;
			const items = itemRefs.current;

			if (!container || !scroller || !items?.length) return;

			const maxWidth = container.getBoundingClientRect().width;
			const totalWidth = scroller.getBoundingClientRect().width;

			// If all items fit then no further action is needed.
			if (maxWidth >= totalWidth) return;

			const computedGap = Number.parseFloat(getComputedStyle(scroller).gap);

			let accumulatedWidth = 0;
			for (let index = 0; index < value; index++) {
				accumulatedWidth += items[index].getBoundingClientRect().width;
			}
			accumulatedWidth += value * computedGap;

			// console.log(accumulatedWidth, maxWidth, totalWidth);

			// Adjusting the logic to snap to the end of the carousel
			if (accumulatedWidth + maxWidth > totalWidth) {
				setScrollPx(totalWidth - maxWidth);
				setValue(value);
			} else {
				setScrollPx(accumulatedWidth);
			}
		}, [containerRef, scrollerRef, itemRefs, value, setValue]);

		useEffect(() => {
			window.addEventListener("resize", render);
			render();

			return () => {
				window.removeEventListener("resize", render);
			};
		}, [render]);

		useEffect(() => {
			render();
		}, [value, render]);

		return (
			<div className="flex flex-row overflow-hidden" ref={containerRef}>
				<div
					ref={composeRefs(reference, scrollerRef)}
					style={{ transform: `translateX(-${scrollPx}px)` }}
					className={cn(
						"flex flex-row shrink-0 transition-transform",
						className
					)}
					{...props}
				>
					{React.Children.map(children, (child, index) =>
						// @ts-expect-error bruh this shit stupid
						React.cloneElement(child, {
							ref: (elm: HTMLDivElement | null) =>
								elm && (itemRefs.current![index] = elm)
						})
					)}
				</div>
			</div>
		);
	}
);

export const CarouselItem = withRef<"div">(
	({ className, ...props }, reference) => (
		<div className={cn("shrink-0", className)} ref={reference} {...props} />
	)
);

export const CarouselBackButton = withRef<"button", { asChild?: boolean }>(
	({ className, asChild, ...props }, reference) => {
		const {
			state: [state, setState],
			itemRefs,
			containerRef,
			scrollerRef
		} = useCarousel();

		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn("shrink-0", className)}
				ref={reference}
				onClick={() => {
					if (state === undefined) return;

					const items = itemRefs.current;
					const container = containerRef.current;
					const scroller = scrollerRef.current;

					if (!items?.length || !container || !scroller) return;

					const maxWidth = container.getBoundingClientRect().width;
					const totalWidth = scroller.getBoundingClientRect().width;

					// If all items fit then no further action is needed.
					if (maxWidth >= totalWidth) return;

					const computedGap = Number.parseFloat(getComputedStyle(scroller).gap);

					// Handle wrap-around case when the state is the last item
					if (state === items.length - 1) {
						let accumulatedWidth = 0;
						let newIndex = 0;

						for (let index = items.length - 1; index >= 0; index--) {
							accumulatedWidth +=
								items[index].getBoundingClientRect().width + computedGap;
							if (accumulatedWidth > maxWidth) {
								newIndex = index + 1;
								break;
							}
							newIndex = index;
						}

						setState(newIndex - 1);
					} else {
						setState(state === 0 ? items.length - 1 : state - 1);
					}
				}}
				{...props}
			/>
		);
	}
);

export const CarouselNextButton = withRef<"button", { asChild?: boolean }>(
	({ className, asChild, ...props }, reference) => {
		const {
			state: [state, setState],
			itemRefs,
			containerRef,
			scrollerRef
		} = useCarousel();

		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn("shrink-0", className)}
				ref={reference}
				onClick={() => {
					if (state === undefined) return;

					const items = itemRefs.current;
					const container = containerRef.current;
					const scroller = scrollerRef.current;

					if (!items?.length || !container || !scroller) return;

					const maxWidth = container.getBoundingClientRect().width;
					const totalWidth = scroller.getBoundingClientRect().width;

					// If all items fit then no further action is needed.
					if (maxWidth >= totalWidth) return;

					const computedGap = Number.parseFloat(getComputedStyle(scroller).gap);

					let accumulatedWidth = 0;
					for (let index = 0; index < state; index++) {
						accumulatedWidth += items[index].getBoundingClientRect().width;
					}
					accumulatedWidth += state * computedGap;

					// If next item is fully visible, reset to the beginning
					if (accumulatedWidth + maxWidth > totalWidth) {
						setState(0);
					} else {
						setState(state === items.length - 1 ? 0 : state + 1);
					}
				}}
				{...props}
			/>
		);
	}
);
