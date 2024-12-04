import { type HTMLAttributes, forwardRef } from "react";

const LinkedIn = forwardRef<SVGSVGElement, HTMLAttributes<SVGSVGElement>>(
	(props, reference) => {
		return (
			<svg
				fill="currentColor"
				ref={reference}
				role="img"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<title>LinkedIn</title>
				<g clipPath="url(#clip0_877_2117)">
					<path d="M512 63.9675C512 28.6212 483.346 2.21284e-05 448 4.94252e-05L63.9999 0.000345977C28.6537 0.000373273 0 28.6541 0 64.0003V448C0 483.346 28.6538 512 64 512L447.998 512C483.344 512 511.998 483.379 511.998 448.033C511.998 347.119 511.999 164.881 512 63.9675ZM155.828 422.956H89.0455V178.087H155.828V422.956ZM122.437 149.86C100.933 149.86 83.4803 132.274 83.4803 110.592C83.4803 88.9099 100.933 71.3239 122.437 71.3239C143.941 71.3239 161.393 88.9099 161.393 110.592C161.393 132.274 143.963 149.86 122.437 149.86ZM422.957 422.956H356.175V298.207C356.175 223.232 267.132 228.909 267.132 298.207V422.956H200.349V178.087H267.132V217.377C298.208 159.811 422.957 155.559 422.957 272.495V422.956Z" />
				</g>
				<defs>
					<clipPath id="clip0_877_2117">
						<rect height="512" width="512" />
					</clipPath>
				</defs>
			</svg>
		);
	}
);
LinkedIn.displayName = "LinkedIn";

export default LinkedIn;
