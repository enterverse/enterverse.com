import { Fragment } from "react/jsx-runtime";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Discord from "@/icons/discord";
import { ExternalLink, Link } from "@/components/ui/link";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import {
	AssociatedImages,
	ExecutiveImages,
	PromoImages,
	TeamImages,
	VRChatImages
} from "@/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	emailListSubmission,
	handleFormSubmission
} from "@/utils/form-handler.ts";

import VideoThumbnail from "../assets/concept/koi-fish.webp";
import ConceptVideo from "../assets/concept/enterverse-trailer.mp4";
import EnterlinkLogo from "../assets/logos/enterlink-logo.webp";
import VeaLogoThingy from "../assets/concept/vea-butterfly.webp";
import VeuLogoTransparent from "../assets/logos/veu-logo-transparent.webp";
import Twitter from "../icons/twitter.tsx";
import Instagram from "../icons/instagram.tsx";
import Facebook from "../icons/facebook.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Medium from "../icons/medium.tsx";

export default function Home() {
	return (
		<Fragment>
			<VideoHeaderSection />
			<CarouselSection />
			<EnterlinkSection />
			<AboutSection />
			<ContactSection />
		</Fragment>
	);
}

function VideoHeaderSection() {
	return (
		<header className="relative flex w-full flex-col sm:min-h-screen" id="home">
			<div className="sm:header-video-mask header-video-mask-mobile absolute size-full">
				<video
					autoPlay
					disablePictureInPicture
					disableRemotePlayback
					loop
					muted
					className="absolute size-full object-cover"
					controls={false}
					poster={VideoThumbnail}
					src={ConceptVideo}
				/>
				<div className="header-video-gradient-mobile sm:header-video-gradient absolute size-full" />
			</div>
			<div className="relative flex size-full max-w-md flex-1 flex-col justify-start gap-10 p-6 pt-28 sm:max-w-7xl sm:justify-center xl:p-32">
				<h1 className="text-4xl font-semibold leading-tight sm:text-7xl">
					Find Meetups and Events in all your Virtual Realities
				</h1>
				<p className="max-w-4xl text-base font-medium leading-relaxed sm:text-xl">
					Enterverse’s soon-to-launch service, Enterlink, makes virtual social
					games and experiences accessible, connecting you to events,
					experiences, worlds, and communities.
				</p>
				<p className="max-w-xl text-base font-medium leading-relaxed sm:text-xl">
					Interested in more? Join our community to stay updated with the latest
					updates on Enterlink.
				</p>
				<div className="flex flex-col gap-6 sm:flex-row">
					<Button
						asChild
						className="w-full gap-4 rounded-xl py-4 sm:w-64"
						size="none"
						variant="discord"
					>
						<ExternalLink href="https://discord.gg/9m54Un3BNm" target="_blank">
							<Discord className="size-8" />
							<p className="text-lg font-semibold">Join our Discord</p>
						</ExternalLink>
					</Button>
					<Button
						asChild
						className="w-full gap-6 rounded-xl py-4 sm:w-64"
						size="none"
						variant="outlineWhite"
					>
						<Link className="text-lg font-semibold" to="/#enterlink">
							Whats Enterlink?
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}

function CarouselSection() {
	return (
		<section className="w-full overflow-hidden py-14 pb-20 sm:py-0 sm:pb-32">
			<Carousel
				className="size-full"
				opts={{
					loop: true,
					dragFree: true
				}}
				plugins={[
					Autoplay({
						delay: 5000,
						stopOnInteraction: true
					})
				]}
			>
				<CarouselContent className="ml-0 mr-6 xl:ml-16 xl:mr-32">
					{PromoImages.map((image, index) => (
						<CarouselItem
							className="aspect-video size-full basis-[95%] pl-6 sm:basis-[70%] xl:basis-[45%] xl:pl-16"
							key={index}
						>
							<img
								alt="Promo Image"
								className="size-full rounded-2xl object-cover object-center"
								src={image}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

function EnterlinkSection() {
	return (
		<section
			className="sm:enterlink-section-gradient enterlink-section-gradient-mobile flex w-full flex-col gap-16 px-6 py-20 xl:gap-24 xl:p-32"
			id="enterlink"
		>
			<div className="flex flex-row items-center gap-4 sm:gap-6">
				<img
					alt="Enterlink Logo"
					className="size-12 sm:size-16"
					src={EnterlinkLogo}
				/>
				<h1 className="mb-2 text-4xl font-bold sm:mb-2.5 sm:text-5xl">
					enterlink
				</h1>
			</div>
			<div className="grid grid-cols-1 gap-16 xl:gap-32 2xl:grid-cols-2">
				<div className="flex flex-col gap-12">
					<h2 className="max-w-72 text-3xl font-semibold sm:max-w-xl sm:text-6xl">
						Make plans and share with friends
					</h2>
					<p className="max-w-4xl text-base font-medium leading-relaxed text-neutral-200 sm:text-xl">
						Enterlink is our soon-to-launch service that makes virtual social
						games and experiences accessible, connecting you to events,
						experiences, worlds and communities.
					</p>
					<p className="max-w-3xl text-base font-medium leading-relaxed text-neutral-200 sm:text-xl">
						Stay updated with our latest developments! Join our community and
						receive exclusive news and updates on Enterlink, Enterverse, and
						more.
					</p>
					<form
						className="relative w-full max-w-lg"
						onSubmit={emailListSubmission}
					>
						<Input
							required
							className="h-fit w-full rounded-l-[16px] rounded-r-[40px] border-neutral-200 bg-transparent p-4 pr-16 !text-lg sm:!text-xl"
							maxLength={256}
							name="email"
							placeholder="Enter your email to join"
							type="email"
						/>
						<Button
							className="absolute right-2 top-1/2 size-12 -translate-y-1/2 rounded-full"
							size="none"
							type="submit"
							variant="pink"
						>
							<ArrowRight className="size-8" />
						</Button>
					</form>
				</div>
				<div className="flex h-full animate-pulse items-center justify-center duration-2000">
					<img
						alt="Vea Logo"
						className="aspect-square h-auto w-full sm:h-full sm:w-auto"
						src={VeaLogoThingy}
					/>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-16 xl:gap-32 2xl:grid-cols-2">
				<div className="flex flex-col gap-6">
					<h2 className="-mb-2 text-lg font-semibold text-neutral-300 sm:text-2xl">
						Here’s the issue we saw
					</h2>
					<h3 className="max-w-sm text-2xl font-semibold sm:max-w-2xl sm:text-4xl">
						It’s not easy finding events, worlds and experiences
					</h3>
					<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
						VR platforms offer exciting spaces but finding events, worlds,
						experiences and communities is like navigating the early, chaotic
						internet.
					</p>
				</div>
				<div className="flex flex-col gap-6">
					<h2 className="-mb-2 text-lg font-semibold text-neutral-300 sm:text-2xl">
						Here’s our solution
					</h2>
					<h3 className="max-w-sm text-2xl font-semibold sm:max-w-2xl sm:text-4xl">
						An easy-to-navigate platform for VR events and community building
					</h3>
					<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
						Enterlink maps and organizes virtual worlds, making it easy to find
						and join events across different platforms.
					</p>
				</div>
			</div>
		</section>
	);
}

function AboutSection() {
	return (
		<section
			className="about-section-gradient flex w-full flex-col gap-16 py-20 xl:gap-32 xl:py-32 xl:pb-40"
			id="about"
		>
			<div className="flex flex-col gap-12 px-6 xl:px-32">
				<h2 className="max-w-72 text-3xl font-semibold sm:max-w-4xl sm:text-6xl">
					We’re helping you build your digital community
				</h2>
				<p className="max-w-4xl text-base font-medium leading-relaxed text-neutral-200 sm:text-xl">
					Our goal is to help build authentic social connections by bringing
					people together through a shared love of virtual entertainment and
					culture. We aim to make communities within Virtual Reality easily
					accessible to everyone.
				</p>
			</div>
			<Carousel
				className="size-full"
				opts={{
					loop: true,
					dragFree: true
				}}
				plugins={[
					Autoplay({
						delay: 5000,
						stopOnInteraction: true
					})
				]}
			>
				<CarouselContent className="ml-0 mr-8 xl:ml-16 xl:mr-32">
					{VRChatImages.map((image, index) => (
						<CarouselItem
							className="aspect-video size-full basis-[95%] pl-6 sm:basis-[70%] xl:basis-[45%] xl:pl-16"
							key={index}
						>
							<img
								alt="Reference Image"
								className="size-full rounded-2xl object-cover object-center"
								src={image}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="flex flex-col gap-16 sm:gap-32">
				<div className="flex flex-col gap-12 px-6 xl:px-32">
					<h2 className="text-3xl font-semibold sm:text-5xl">Meet the team</h2>
					<p className="max-w-3xl text-base font-medium leading-relaxed text-neutral-200 sm:text-xl">
						We’re a team of developers and community contributors bridging the
						gap between today’s reality and our shared vision of an ethical
						digital future centered around communities and creators.
					</p>
				</div>
				<div className="flex flex-col gap-12">
					<h3 className="px-6 text-3xl font-semibold sm:text-4xl xl:px-32">
						Founders
					</h3>
					<Carousel
						className="size-full"
						opts={{
							dragFree: true
							// loop: true
						}}
						plugins={
							[
								// Autoplay({
								// 	delay: 15000,
								// 	stopOnInteraction: true
								// })
							]
						}
					>
						<CarouselContent className="ml-0 mr-6 xl:ml-16 xl:mr-32">
							{ExecutiveImages.map((employee, index) => (
								<CarouselItem
									className="flex size-full basis-[95%] flex-col gap-4 pl-6 sm:basis-[50%] xl:basis-1/3 xl:pl-16"
									key={index}
								>
									<div className="aspect-square size-full">
										<img
											alt={employee.name}
											className="size-full rounded-2xl object-cover object-center"
											src={employee.img}
										/>
									</div>
									<h3 className="mt-2 text-3xl font-medium sm:mt-6 sm:text-4xl">
										{employee.name}
									</h3>
									<h4 className="text-xl font-medium text-neutral-200 sm:text-2xl">
										{employee.position}
									</h4>
									<p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-xl">
										{employee.description}
									</p>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
				<div className="flex flex-col gap-12">
					<h3 className="px-6 text-3xl font-semibold sm:text-4xl xl:px-32">
						Core Team
					</h3>
					<Carousel
						className="size-full"
						opts={{
							dragFree: true
							// loop: true
						}}
						plugins={
							[
								// Autoplay({
								// 	delay: 5000,
								// 	stopOnInteraction: true
								// })
							]
						}
					>
						<CarouselContent className="ml-0 mr-6 xl:ml-24 xl:mr-32">
							{TeamImages.map((employee, index) => (
								<CarouselItem
									className="flex size-full basis-[75%] flex-col gap-2 pl-6 sm:basis-[55%] md:basis-[35%] lg:basis-[25%] xl:pl-8 2xl:basis-1/6"
									key={index}
								>
									<div className="aspect-square size-full">
										<img
											alt={employee.name}
											className="size-full rounded-2xl object-cover object-center"
											src={employee.img}
										/>
									</div>
									<h3 className="mt-4 text-2xl font-medium sm:text-3xl">
										{employee.name}
									</h3>
									<h4 className="text-lg font-medium text-neutral-200 sm:text-xl">
										{employee.position}
									</h4>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
				<div className="flex flex-col gap-12">
					<h3 className="px-6 text-2xl font-semibold sm:text-4xl xl:px-32">
						Associate Developers & Creators
					</h3>
					<Carousel
						className="size-full"
						opts={{
							// loop: true
							dragFree: true
						}}
						plugins={
							[
								// Autoplay({
								// 	delay: 5000,
								// 	stopOnInteraction: true
								// })
							]
						}
					>
						<CarouselContent className="ml-0 mr-6 xl:ml-24 xl:mr-32">
							{AssociatedImages.map((employee, index) => (
								<CarouselItem
									className="flex size-full basis-[48%] flex-col gap-2 pl-6 sm:basis-[35%] md:basis-[30%] lg:basis-[22%] xl:basis-1/5 xl:pl-8 2xl:basis-[14%]"
									key={index}
								>
									<div className="aspect-square size-full">
										<img
											alt={employee.name}
											className="size-full rounded-2xl object-cover object-center"
											src={employee.img}
										/>
									</div>
									<h3 className="mt-2 text-xl font-medium sm:text-2xl">
										{employee.name}
									</h3>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
}

function ContactSection() {
	return (
		<section
			className="sm:enterlink-section-gradient enterlink-section-gradient-mobile flex w-full flex-col gap-16"
			id="contact"
		>
			<div className="flex w-full flex-col gap-16 px-6 py-20 xl:gap-24 xl:p-32">
				<h2 className="max-w-72 text-3xl font-semibold sm:max-w-xl sm:text-6xl">
					Interested in more?
				</h2>
				<div className="grid grid-cols-1 gap-16 xl:gap-32 2xl:grid-cols-2">
					<div className="flex flex-col justify-between gap-16 xl:gap-32">
						<div className="flex flex-col gap-6">
							<h3 className="max-w-sm text-2xl font-semibold sm:max-w-2xl sm:text-4xl">
								Join the adventure
							</h3>
							<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
								VR platforms offer exciting spaces but finding events, worlds,
								experiences and communities is like navigating the early,
								chaotic internet.
							</p>
							<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
								Interested in collaborating, want to learn more, or want to make
								a recommendation?
							</p>
						</div>
						<div className="flex flex-col gap-6">
							<h3 className="max-w-sm text-2xl font-semibold sm:max-w-2xl sm:text-4xl">
								Take our survey
							</h3>
							<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
								Share your insights and help us craft the ideal digital future.
								Together, let’s make the future we all want happen.{" "}
								<ExternalLink
									className="text-pink-600 hover:text-pink-500"
									href="https://survey.enterlink.app/"
									target="_blank"
								>
									Take our survey here!
								</ExternalLink>
							</p>
						</div>
						<div className="flex flex-col gap-6">
							<h3 className="max-w-sm text-2xl font-semibold sm:max-w-2xl sm:text-4xl">
								Get rewarded for subscribing
							</h3>
							<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
								Our associate developers, supporters, and community contributors
								gain free access to early feature releases, exclusive
								behind-the-scenes content, and a community of visionaries
								shaping the future of entertainment.
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<h3 className="max-w-sm text-2xl font-semibold sm:max-w-2xl sm:text-4xl">
							Stay connected
						</h3>
						<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
							Stay updated with our latest developments! Enter your email to
							join our community and receive exclusive news and updates on
							Enterlink, Enterverse, and more.
						</p>
						<p className="max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-xl">
							We look forward to staying in touch!
						</p>
						<form
							className="flex w-full max-w-xl flex-col gap-6"
							onSubmit={handleFormSubmission}
						>
							<Input
								required
								className="w-full rounded-lg border-neutral-400 bg-[#303035] px-4 py-8 !text-lg sm:!text-xl"
								maxLength={256}
								name="email"
								placeholder="email"
								type="email"
							/>
							<Textarea
								required
								className="min-h-60 w-full rounded-lg border-neutral-400 bg-[#303035] p-4 !text-lg sm:!text-xl"
								maxLength={2048}
								name="feedback"
								placeholder="Share your thoughts, interest, or feedback..."
							/>
							<Button
								className="w-full gap-4 rounded-xl py-4 sm:w-64"
								size="none"
								type="submit"
								variant="pink"
							>
								<p className="text-lg font-semibold">Contact</p>
							</Button>
						</form>
					</div>
				</div>
			</div>
			<footer className="relative flex w-full flex-col-reverse items-center justify-evenly gap-12 px-6 pb-20 xl:flex-row xl:justify-between xl:px-32">
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
		</section>
	);
}
