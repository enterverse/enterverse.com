import { type HTMLAttributes, forwardRef } from "react";

const Facebook = forwardRef<SVGSVGElement, HTMLAttributes<SVGSVGElement>>(
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
				<title>Facebook</title>
				<g clipPath="url(#clip0_877_2114)">
					<path d="M512.006 64C512.006 28.6538 483.352 0 448.006 0H64.0043C28.6583 0 0.00457714 28.6534 0.00424243 63.9994L0.000606065 448C0.000271345 483.346 28.6541 512 64.0005 512L216.166 512V313.728H149.435V236.459H216.166V179.478C216.166 113.344 256.55 77.3337 315.558 77.3337C343.824 77.3337 368.102 79.4457 375.184 80.3844V149.504L334.267 149.526C302.182 149.526 295.974 164.779 295.974 187.136V236.48H372.496L362.534 313.75H295.974V512H448.006C483.352 512 512.006 483.347 512.006 448V64Z" />
				</g>
				<defs>
					<clipPath id="clip0_877_2114">
						<rect height="512" width="512" />
					</clipPath>
				</defs>
			</svg>
		);
	}
);
Facebook.displayName = "Facebook";

export default Facebook;
