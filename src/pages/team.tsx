import { ExternalLink } from "@/components/ui/link";
import { AssociatedImages, ExecutiveImages, TeamImages } from "@/constants";
import Discord from "@/icons/discord";
import Twitter from "@/icons/twitter";
import Instagram from "@/icons/instagram";
import Facebook from "@/icons/facebook";
import LinkedIn from "@/icons/linkedin";
import Medium from "@/icons/medium";

import VeuLogoTransparent from "../assets/logos/veu-logo-transparent.webp";

export default function Team() {
	return (
		<>
			<section className="flex flex-col gap-16 p-6 xl:p-32 xl:pt-40">
				<div className="flex flex-col gap-8">
					<h1 className="text-3xl font-semibold sm:text-5xl">
						Employee Roster
					</h1>
					<p className="max-w-3xl text-base font-medium leading-relaxed text-neutral-200 sm:text-xl">
						Below is a list of our employees and associated images. We are proud
						to have such a talented team working on our projects.
					</p>
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-8">
					{[...ExecutiveImages, ...TeamImages, ...AssociatedImages].map(
						(employee, index) => (
							<div className="flex flex-col gap-0.5" key={index}>
								<div className="relative w-full pt-[100%]">
									<img
										alt={employee.name}
										className="absolute inset-0 size-full rounded-2xl object-cover object-center"
										src={employee.img}
									/>
								</div>
								<h3 className="mt-4 text-2xl font-medium">{employee.name}</h3>
								{"position" in employee && (
									<h4 className="text-xl font-medium text-neutral-400">
										{employee.position as string}
									</h4>
								)}
							</div>
						)
					)}
				</div>
			</section>
			<footer className="sm:enterlink-section-gradient enterlink-section-gradient-mobile relative flex w-full flex-col-reverse items-center justify-evenly gap-12 px-6 py-20 xl:flex-row xl:justify-between xl:px-32">
				<div className="flex flex-col items-center gap-10 xl:flex-row xl:items-start xl:gap-2">
					<img className="h-16 w-24 xl:h-10 xl:w-16" src={VeuLogoTransparent} />
					<div className="flex flex-col">
						<div className="flex flex-col">
							<p className="font-dm-sans text-sm text-gray-500">
								© VEU Inc. 2024 - All Rights Reserved
							</p>
						</div>
						<div className="flex flex-col">
							<p className="font-dm-sans text-sm text-gray-500">
								<ExternalLink
									className="text-pink-600 hover:text-pink-500"
									href="https://policies.enterlink.app/terms"
									target="_blank"
								>
									Terms of Service
								</ExternalLink>{" "}
								and{" "}
								<ExternalLink
									className="text-pink-600 hover:text-pink-500"
									href="https://policies.enterlink.app/"
									target="_blank"
								>
									Privacy Policy
								</ExternalLink>
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row xl:absolute xl:left-1/2 xl:-translate-x-1/2">
					<ExternalLink
						className="p-2.5 transition-all hover:rotate-[15deg] hover:text-pink-500"
						href="https://discord.enterverse.com/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Discord className="size-6" />
					</ExternalLink>
					<ExternalLink
						className="p-2.5 transition-all hover:rotate-[15deg] hover:text-pink-500"
						href="https://twitter.com/VEUverse"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Twitter className="size-6" />
					</ExternalLink>
					<ExternalLink
						className="p-2.5 transition-all hover:rotate-[15deg] hover:text-pink-500"
						href="https://www.instagram.com/veuverse/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Instagram className="size-6" />
					</ExternalLink>
					<ExternalLink
						className="p-2.5 transition-all hover:rotate-[15deg] hover:text-pink-500"
						href="https://www.facebook.com/VEUverse"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Facebook className="size-6" />
					</ExternalLink>
					<ExternalLink
						className="p-2.5 transition-all hover:rotate-[15deg] hover:text-pink-500"
						href="https://www.linkedin.com/company/veu-inc/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<LinkedIn className="size-6" />
					</ExternalLink>
					<ExternalLink
						className="p-2.5 transition-all hover:rotate-[15deg] hover:text-pink-500"
						href="https://medium.com/@veuverse"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Medium className="size-6" />
					</ExternalLink>
				</div>
			</footer>
		</>
	);
}
