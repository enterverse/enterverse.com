import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Button } from "@radix-ui/themes";
import { cn } from "@udecode/cn";
import { withRef } from "@udecode/react-utils";
import React, {
	type RefObject,
	createContext,
	useContext,
	useRef,
	useEffect
} from "react";
{
	/* 
<Carousel>
  <CarouselNextButton />
    <CarouselItems>
       <CarouselItem />
       <CarouselItem />
       <CarouselItem />
    </CarouselItems>
  <CarouselBackButton />
</Carousel> */
}
interface CarouselContext {
	backRef: RefObject<HTMLButtonElement>;
	nextRef: RefObject<HTMLButtonElement>;
	itemRefs: RefObject<Array<HTMLDivElement>>;
	state: [number | undefined, (value: number | undefined) => void];
}

const CarouselContext = createContext<CarouselContext | null>(null);
const useCarousel = () => useContext(CarouselContext)!;

export const Carousel = withRef<
	"div",
	{
		current?: number;
		onCurrentChange?: (value: number) => void;
		defaultCurrent?: number;
		gap?: number;
	}
>(
	(
		{
			current,
			onCurrentChange,
			defaultCurrent = 0,
			children,
			className,
			gap,
			...props
		},
		reference
	) => {
		const backReference = useRef<HTMLButtonElement>(null);
		const nextReference = useRef<HTMLButtonElement>(null);
		const [state, setState] = useControllableState({
			prop: current,
			onChange: onCurrentChange,
			defaultProp: defaultCurrent
		});

		const itemReferences = useRef<Array<HTMLDivElement>>([]);

		useEffect(() => {
			if (
				!itemReferences.current ||
				state === undefined ||
				state >= itemReferences.current.length ||
				!itemReferences.current[state]
			)
				return;
			// calculating pixels from rem.
			const rootFontSize = Number.parseFloat(
				getComputedStyle(document.documentElement).fontSize
			);
			let accum = (gap ?? 0) * rootFontSize * state;

			for (let index = 0; index < state; index++) {
				accum += itemReferences.current[index].getBoundingClientRect().width;
			}

			console.log("Current goto", state, accum);
			itemReferences.current[state]?.scrollIntoView({
				behavior: "smooth",
				inline: "start",
				block: "nearest"
			});
		}, [itemReferences, state, gap]);

		return (
			<CarouselContext.Provider
				value={{
					backRef: backReference,
					nextRef: nextReference,
					itemRefs: itemReferences,
					state: [state, setState]
				}}
			>
				<div
					className={cn("flex flex-row", className)}
					ref={reference}
					style={{ gap: `${gap ?? 0}rem` }}
					{...props}
				>
					{React.Children.map(children, (child, index) =>
						// @ts-expect-error bruh this shit stupid
						React.cloneElement(child, {
							ref: (elm: HTMLDivElement | null) => {
								if (elm) {
									itemReferences.current[index] = elm;
								}
							}
						})
					)}
				</div>
			</CarouselContext.Provider>
		);
	}
);

export const CarouselItem = withRef<"div">(
	({ className, ...props }, reference) => (
		<div className={cn("", className)} ref={reference} {...props} />
	)
);

export const CarouselBackButton = ({ className = "", ...props }) => {
	const {
		state: [currentItem, setCurrentItem],
		itemRefs,
		backRef
	} = useCarousel();

	const handleClick = () => {
		if (!currentItem || currentItem <= 0) {
			return;
		}
		setCurrentItem(currentItem - 1);

		const previousItemReference = itemRefs.current?.[currentItem - 1];
		if (previousItemReference) {
			previousItemReference.focus();
		}
	};

	return (
		<Button
			className={` ${className}`}
			type="button"
			onClick={handleClick}
			{...props}
			ref={backRef}
		>
			{"<"}
		</Button>
	);
};

export const CarouselNextButton = ({ className = "", ...props }) => {
	const {
		state: [currentItem, setCurrentItem],
		itemRefs,
		nextRef
	} = useCarousel();

	const handleClick = () => {
		if (
			!itemRefs.current ||
			currentItem === undefined ||
			currentItem >= itemRefs.current.length - 1
		) {
			return;
		}
		setCurrentItem(currentItem + 1);

		const nextItemReference = itemRefs.current?.[currentItem + 1];
		if (nextItemReference) {
			nextItemReference.focus();
		}
	};

	return (
		<Button
			className={` ${className}`}
			type="button"
			onClick={handleClick}
			{...props}
			ref={nextRef}
		>
			{">"}
		</Button>
	);
};
