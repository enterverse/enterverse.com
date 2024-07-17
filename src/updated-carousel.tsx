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
	itemRefs: RefObject<Array<HTMLDivElement | null>>;
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

		const itemReferences = useRef<Array<HTMLDivElement | null>>([]);

		useEffect(() => {
			itemReferences.current = itemReferences.current.slice(
				0,
				React.Children.count(children)
			);
		}, [children]);

		useEffect(() => {
			console.log("Item References:", itemReferences.current);
		}, []);

		useEffect(() => {
			try {
				if (
					state === undefined ||
					state >= itemReferences.current.length ||
					!itemReferences.current[state]
				) {
					console.error("Invalid state or item reference", {
						state,
						itemReferences: itemReferences.current
					});
					return;
				}

				// calculating pixels from rem.
				const rootFontSize = Number.parseFloat(
					getComputedStyle(document.documentElement).fontSize
				);
				let accum = (gap ?? 0) * rootFontSize * state;

				for (let index = 0; index < state; index++) {
					accum +=
						itemReferences.current[index]?.getBoundingClientRect().width ?? 0;
				}

				console.log("Current goto", state, accum);
				itemReferences.current[state]?.scrollIntoView({
					behavior: "smooth",
					inline: "start",
					block: "nearest"
				});
			} catch (reason) {
				console.error("Error in carousel", reason);
			}
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
		console.log("Back button pressed");
		if (currentItem === undefined || currentItem <= 0) {
			console.log("No previous item to nav to");
			return;
		}
		setCurrentItem(currentItem - 1);

		const previousItemReference = itemRefs.current?.[currentItem - 1];
		if (previousItemReference) {
			previousItemReference.focus();
			console.log("focused on youur previous item");
		} else {
			console.error("No previous item reference found");
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
		console.log("Next button pressed");
		if (
			!itemRefs.current ||
			currentItem === undefined ||
			currentItem >= itemRefs.current.length - 1
		) {
			console.log("No next item to nav to");
			return;
		}
		setCurrentItem(currentItem + 1);

		const nextItemReference = itemRefs.current?.[currentItem + 1];
		if (nextItemReference) {
			nextItemReference.focus();
			console.log("focused on your next item");
		} else {
			console.error("No next item reference found");
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
