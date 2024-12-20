import { type HTMLAttributes, forwardRef } from "react";

const Medium = forwardRef<SVGSVGElement, HTMLAttributes<SVGSVGElement>>(
	(props, reference) => {
		return (
			<svg
				fill="currentColor"
				ref={reference}
				role="img"
				viewBox="0 0 512 290"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<title>Medium</title>
				<g clipPath="url(#clip0_877_2121)">
					<path d="M144.633 289.633C224.511 289.633 289.266 224.878 289.266 145C289.266 65.1215 224.511 0.367188 144.633 0.367188C64.7543 0.367188 0 65.1215 0 145C0 224.878 64.7543 289.633 144.633 289.633Z" />
					<path d="M374.888 282.69C414.827 282.69 447.204 221.174 447.204 145.289C447.204 69.4046 414.827 7.88806 374.888 7.88806C334.948 7.88806 302.571 69.4046 302.571 145.289C302.571 221.174 334.948 282.69 374.888 282.69Z" />
					<path d="M486.544 268.227C500.603 268.227 512 213.315 512 145.579C512 77.8416 500.603 22.9299 486.544 22.9299C472.486 22.9299 461.089 77.8416 461.089 145.579C461.089 213.315 472.486 268.227 486.544 268.227Z" />
				</g>
				<defs>
					<clipPath id="clip0_877_2121">
						<rect
							height="289.266"
							transform="translate(0 0.367188)"
							width="512"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	}
);
Medium.displayName = "Medium";

export default Medium;
