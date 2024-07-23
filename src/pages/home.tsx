import { useState, useEffect, useRef } from "react";
import {
	AlignRight,
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	X
} from "lucide-react";
import { cn } from "@udecode/cn";

import {
	Carousel,
	CarouselItems,
	CarouselBackButton,
	CarouselNextButton,
	CarouselItem
} from "../components/carousel.tsx";
import {
	AssociatedImages,
	ExecutiveImages,
	PromoImages,
	TeamImages,
	VRChatImages
} from "../constants.ts";
import EnterverseLogo from "../assets/logos/enterverse-white-logo.webp";
import VideoThumbnail from "../assets/concept/koi-fish.webp";
import ConceptVideo from "../assets/concept/enterverse-trailer.mp4";
import Discord from "../icons/discord.tsx";
import EnterlinkLogo from "../assets/logos/enterlink-logo.webp";
import VeaLogoThingy from "../assets/concept/vea-butterfly.webp";
import VeuLogoTransparent from "../assets/logos/veu-logo-transparent.webp";
import Twitter from "../icons/twitter.tsx";
import Instagram from "../icons/instagram.tsx";
import Facebook from "../icons/facebook.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Medium from "../icons/medium.tsx";

// fix Michael images
// add max-w for paragraph elements for pages bigger than 1080p
// look at Alex's feedback
// pointer events none for email inputs.

export default function Home() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const lastScrollY = useRef(window.scrollY);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isNavClicked, setIsNavClicked] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrolled = currentScrollY > 0;
			setIsScrolled(scrolled);

			if (scrolled && !isNavClicked) {
				setIsMenuOpen(false);
				const shouldShowHeader =
					currentScrollY <= lastScrollY.current || !scrolled;
				setShowHeader(shouldShowHeader);
			}

			lastScrollY.current = currentScrollY < 0 ? 0 : currentScrollY;
		};

		const handleMouseMove = (event: MouseEvent) => {
			if (event.clientY < 100) {
				setShowHeader(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isNavClicked]);

	const handleNavClick = () => {
		setIsNavClicked(true);
		setIsMenuOpen(false);

		setTimeout(() => {
			setIsNavClicked(false);
		}, 1000);
	};

	return (
		<main className="bg-overall-gradient ">
			<div className="flex min-h-screen flex-col items-center justify-between">
				<header
					className={`fixed top-0 z-50 flex h-32 w-full items-center justify-between bg-black/0 px-8 pt-8 transition-all duration-500 xl:justify-center xl:px-32 ${
						isScrolled ? "backdrop-blur-md" : ""
					} ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
				>
					<div className="absolute left-1/2 -translate-x-1/2 gap-6">
						<img className="h-16 w-60" src={EnterverseLogo} />
					</div>

					<nav className="ml-auto hidden h-24 w-96 flex-row items-center justify-between xl:flex">
						<a href="#home" onClick={handleNavClick}>
							Home
						</a>

						<a href="#Enterlink" onClick={handleNavClick}>
							Enterlink
						</a>

						<a href="#about" onClick={handleNavClick}>
							About
						</a>

						<a href="#contact" onClick={handleNavClick}>
							Contact
						</a>
					</nav>
					<button
						className="ml-auto xl:hidden"
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<AlignRight className="size-8" />
					</button>
					<div
						className={cn(
							"fixed left-0 top-0 z-50 h-screen w-full duration-500 bg-mobile-gradient -translate-y-full transition-transform",
							isMenuOpen && "translate-y-0"
						)}
					>
						<div className="flex h-32 w-full items-center justify-between pr-8 pt-8">
							<div className="absolute left-1/2 -translate-x-1/2 gap-6">
								<img className="h-16 w-60" src={EnterverseLogo} />
							</div>
							<div className="mt-6 flex flex-1 items-center justify-end">
								<button
									className="right-20 py-4 pl-4"
									type="button"
									onClick={() => setIsMenuOpen(false)}
								>
									<X className="size-8" />
								</button>
							</div>
						</div>
						<nav className="absolute right-0 top-1/2 mr-8 flex -translate-y-1/2 flex-col items-end">
							<a
								className="mb-8 py-2 pl-2 font-dm-sans text-3xl font-semibold"
								href="#home"
							>
								Home
							</a>
							<a
								className="mb-8 py-2 pl-2 font-dm-sans text-3xl font-semibold"
								href="#Enterlink"
							>
								Enterlink
							</a>
							<a
								className="mb-8 py-2 pl-2 font-dm-sans text-3xl font-semibold"
								href="#about"
							>
								About
							</a>
							<a
								className="mb-8 py-2 pl-2 font-dm-sans text-3xl font-semibold"
								href="#contact"
							>
								Contact
							</a>
						</nav>
					</div>
				</header>
				<section
					className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 space-x-0 bg-section1-gradient-darkened bg-cover px-8 lg:px-16 xl:px-32 "
					id="home"
				>
					<video
						autoPlay
						disablePictureInPicture
						disableRemotePlayback
						loop
						muted
						className="absolute size-full object-cover mix-blend-overlay"
						controls={false}
						poster={VideoThumbnail}
						src={ConceptVideo}
					/>
					<div className="relative flex max-w-[120rem] flex-col justify-center gap-16 pt-32 xl:w-full xl:pt-24">
						<div className="flex w-full flex-col gap-4 xl:w-2/3">
							<h1 className="mb-4 w-full text-balance font-dm-sans text-5xl font-bold leading-tight text-white drop-shadow-section1 xl:text-7xl">
								Find Meetups and Events in all your Virtual Realities
							</h1>
							<p className="w-full text-balance font-geist text-lg leading-9 text-white drop-shadow-section1 xl:w-2/3 xl:text-xl">
								We know how hard it is to plan your hangouts in virtual spaces.
								Enterverse&apos;s soon-to-launch service, Enterlink, makes
								virtual social games and experiences accessible, connecting you
								to events, experiences, worlds, and communities.
							</p>
						</div>
						<div className="mb-16 flex w-full flex-col gap-8 text-lg xl:mb-0 xl:w-2/3">
							<p className="flex font-geist text-xl leading-9 text-white drop-shadow-section1 xl:w-2/3">
								Interested in more? Join our community to stay updated with the
								latest updates on Enterlink.
							</p>
							<div className="flex w-full flex-col space-y-8 xl:flex-row xl:space-x-4 xl:space-y-0">
								<button
									className="flex h-16 w-full items-center justify-center space-x-4 rounded-xl bg-pink px-4 py-2 font-dm-sans text-white xl:w-64"
									type="button"
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you want to navigate to Discord?"
											)
										) {
											window.open("https://discord.enterverse.com/", "_blank");
										}
									}}
								>
									<p className="font-semibold">Join our Discord</p>
									<Discord className="size-8" />
								</button>
								<button
									className="h-16 w-full rounded-xl border-2 border-white px-4 py-2 font-dm-sans text-white xl:w-64"
									type="button"
								>
									<a href="#Enterlink">
										<p className="font-semibold">What&apos;s Enterlink?</p>
									</a>
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col items-center justify-center gap-16 xl:min-h-screen">
					<Carousel className="relative h-fit w-full bg-black xl:h-[48rem] xl:bg-transparent">
						<CarouselBackButton className="absolute left-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
							<ChevronLeft className="size-8" />
						</CarouselBackButton>
						<CarouselItems className="relative z-10 flex gap-6 px-8 duration-500 xl:px-32">
							{PromoImages.map((image, index) => (
								<CarouselItem
									className="flex aspect-video h-48 flex-col items-center justify-center rounded-lg bg-neutral-900 xl:h-[48rem]"
									key={index}
								>
									<img
										alt={`Promo ${index + 1}`}
										className="size-full rounded-lg object-cover"
										src={image}
									/>
								</CarouselItem>
							))}
						</CarouselItems>
						<CarouselNextButton className="absolute right-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
							<ChevronRight className="size-8" />
						</CarouselNextButton>
					</Carousel>
				</section>

				<section
					className="flex min-h-screen w-full flex-col items-start justify-center bg-section2-gradient bg-cover p-8 xl:p-32"
					id="Enterlink"
				>
					<div className="mt-12 flex w-full flex-col items-center justify-center xl:mt-0 xl:flex-row">
						<div className="flex w-full flex-col items-start justify-center">
							<div className="mb-14 flex h-24 flex-row items-center gap-8">
								<img className="size-20 xl:size-20" src={EnterlinkLogo} />
								<h1 className="font-geist text-5xl font-bold xl:text-6xl">
									enterlink
								</h1>
							</div>
							<div className="flex w-full flex-col items-start justify-center gap-16">
								<div className="flex flex-col gap-8">
									<h2 className="mt-6 font-dm-sans text-5xl font-bold leading-tight text-white xl:mt-0 xl:text-6xl">
										Make plans and share with friends
									</h2>
									<p className="font-geist text-lg leading-9 text-white xl:text-xl">
										Enterlink is our soon-to-launch service that makes virtual
										social games and experiences accessible, connecting you to
										events, experiences, worlds and communities.
									</p>
								</div>
								<div className="flex h-72 flex-col gap-8">
									<p className="font-geist text-lg leading-9 text-white xl:text-xl">
										Stay updated with our latest developments! Join our
										community and receive exclusive news and updates on
										Enterlink, Enterverse, and more.
									</p>

									<form className="flex h-16 w-full items-center overflow-hidden rounded-l-xl rounded-r-full border-2 xl:w-96">
										<input
											className="flex-1 rounded-l-xl bg-transparent px-4 py-2"
											placeholder="Email your email to join"
											type="email"
										/>
										<button
											className="m-1 flex size-12 items-center justify-center rounded-full bg-pink text-white"
											type="submit"
										>
											<ArrowRight className="size-6" />
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="mb-24 mt-8 flex w-full items-center justify-center xl:my-0 xl:w-1/2">
							<img
								alt="Vea Butterfly"
								className="size-96"
								src={VeaLogoThingy}
							/>
						</div>
					</div>
					<div className="mb-12 flex h-auto w-full flex-col items-start justify-center gap-16 xl:mb-0 xl:flex-row">
						<div className="mb-24 flex flex-col gap-4 xl:mb-0">
							<p className="font-dm-sans text-2xl font-bold text-white">
								Here&apos;s the issue we saw
							</p>
							<h1 className="font-dm-sans text-3xl font-bold leading-relaxed text-white xl:text-4xl xl:leading-tight">
								It&apos;s not easy finding events, worlds, and experiences
							</h1>
							<p className="font-geist text-base leading-7 text-white">
								VR platforms offer exciting spaces but finding events, worlds,
								experiences and communities is like navigating the early,
								chaotic internet.
							</p>
						</div>
						<div className="flex flex-col gap-4  font-dm-sans">
							<p className="font-dm-sans text-2xl font-bold text-white">
								Here&apos;s our solution{" "}
							</p>
							<h1 className="font-dm-sans text-3xl font-bold leading-relaxed text-white xl:text-4xl xl:leading-tight">
								An easy-to-navigate platform for VR events and community
								building
							</h1>
							<p className="font-geist text-base leading-7 text-white">
								Enterlink maps and organizes virtual worlds, making it easy to
								find and join events across different platforms.
							</p>
						</div>
					</div>
				</section>

				<section
					className="flex w-full flex-col items-start justify-center gap-16 bg-section3-gradient"
					id="about"
				>
					<div className="flex w-full flex-col items-start justify-center gap-16 xl:gap-32">
						<div className="flex flex-col gap-8 p-8 xl:w-1/2 xl:p-32">
							<h2 className="mb-6 mt-12 font-dm-sans text-5xl font-bold leading-tight text-white xl:mt-0 xl:text-6xl xl:leading-snug">
								We&apos;re helping you build your digital community
							</h2>
							<p className="font-geist text-lg leading-9 text-white xl:text-xl">
								Our goal is to help build authentic social connections by
								bringing people together through a shared love of virtual
								entertainment and culture. We aim to make communities within
								Virtual Reality easily accessible to everyone.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-8 pb-16 xl:pb-32">
							<Carousel className="relative h-fit xl:h-[32rem]">
								<CarouselBackButton className="absolute left-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									<ChevronLeft className="size-8" />
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-6 object-cover px-8 duration-500 xl:px-32">
									{VRChatImages.map((image, index) => (
										<CarouselItem
											className="flex h-48 flex-col items-center justify-center rounded-lg bg-neutral-900 xl:h-[32rem]"
											key={index}
										>
											<img
												alt={`Promo ${index + 1}`}
												className="size-full rounded-lg object-cover"
												src={image}
											/>
										</CarouselItem>
									))}
								</CarouselItems>
								<CarouselNextButton className="absolute right-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									<ChevronRight className="size-8" />
								</CarouselNextButton>
							</Carousel>
						</div>
						<div className="flex  w-full  flex-col items-start justify-center gap-12">
							<div className="flex size-full flex-col gap-8 px-8 xl:w-2/3  xl:px-32">
								<h1 className="mb-2 flex font-dm-sans text-5xl font-bold leading-tight text-white xl:text-6xl">
									Meet the team
								</h1>
								<p className="flex w-full text-balance font-geist text-xl leading-9 text-white xl:w-2/3 xl:text-xl">
									We&apos;re a team of developers and community contributors
									bridging the gap between today&apos;s reality and our shared
									vision of an ethical digital future centered around
									communities and creators.
								</p>
							</div>
							<h1 className="mt-12 px-8 font-dm-sans text-4xl font-bold text-white  xl:px-32 xl:text-4xl ">
								Founders
							</h1>
							<Carousel className="relative flex h-fit w-full gap-12 xl:mb-16">
								<CarouselBackButton className="absolute left-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-r from-neutral-950 to-transparent opacity-0 transition-opacity hover:opacity-100">
									<ChevronLeft className="size-8" />
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-12 px-8 duration-500 xl:px-32">
									{ExecutiveImages.map((member, index) => (
										<CarouselItem
											className="flex h-fit w-64 flex-col items-start justify-start gap-8 rounded-lg"
											key={index}
										>
											<img
												alt={member.name}
												className="size-64 rounded-lg"
												src={member.img}
											/>
											<p className="font-dm-sans text-4xl text-white">
												{member.name}
											</p>
											<p className="font-dm-sans text-2xl font-bold text-white">
												{member.position}
											</p>
											<p className="flex-wrap font-dm-sans text-base text-white">
												{member.description}
											</p>
										</CarouselItem>
									))}
								</CarouselItems>
								<CarouselNextButton className="absolute right-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-l from-neutral-950 to-transparent opacity-0 transition-opacity hover:opacity-100">
									<ChevronRight className="size-8" />
								</CarouselNextButton>
							</Carousel>

							<h1 className="mt-12 px-8 font-dm-sans text-4xl font-bold text-white xl:px-32">
								Core Team
							</h1>
							<Carousel className="relative h-fit w-full xl:mb-16">
								<CarouselBackButton className="absolute left-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									<ChevronLeft className="size-8" />
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-6 px-8 duration-500 xl:px-32">
									{TeamImages.map((member, index) => (
										<CarouselItem
											className="flex h-fit flex-col items-start justify-start gap-4 rounded-lg"
											key={index}
										>
											<img
												alt={member.name}
												className="size-64 rounded-lg object-cover"
												src={member.img}
											/>
											<p className="font-dm-sans text-2xl font-bold leading-9 text-white">
												{member.name}
											</p>
											<p className="max-w-64 font-dm-sans text-xl text-white">
												{member.position}
											</p>
										</CarouselItem>
									))}
								</CarouselItems>
								<CarouselNextButton className="absolute right-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									<ChevronRight className="size-8" />
								</CarouselNextButton>
							</Carousel>

							<h1 className="mt-16 px-8 font-dm-sans text-4xl font-bold text-white  xl:px-32">
								Associate developers and creators
							</h1>
							<Carousel className="relative mb-24 h-fit w-full xl:mb-32">
								<CarouselBackButton className="absolute left-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									<ChevronLeft className="size-8" />
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-6 px-8 duration-500 xl:px-32">
									{AssociatedImages.map((member, index) => (
										<CarouselItem
											className="flex h-60 flex-col items-center justify-start gap-4 rounded-lg"
											key={index}
										>
											<img
												alt={member.name}
												className="size-48 rounded-lg"
												src={member.img}
											/>
											<p className="font-dm-sans text-2xl font-bold text-white">
												{member.name}
											</p>
										</CarouselItem>
									))}
								</CarouselItems>
								<CarouselNextButton className="absolute right-0 top-0 z-20 flex h-full w-20 flex-col items-center justify-center bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									<ChevronRight className="size-8" />
								</CarouselNextButton>
							</Carousel>
						</div>
					</div>
				</section>

				<section
					className="flex w-full flex-col items-start justify-center  bg-footer-gradient px-8 pt-8 xl:px-32 xl:pt-32"
					id="contact"
				>
					<h2 className="my-16 w-2/3 font-dm-sans text-5xl font-bold leading-tight text-white xl:my-0 xl:text-6xl">
						Interested in more?
					</h2>
					<div className="flex flex-col items-start justify-center gap-32 leading-7 xl:flex-row">
						<div className="flex w-full flex-col gap-16 xl:pr-32">
							<div className="my-16 flex flex-col gap-6">
								<h3 className="mb-4 font-dm-sans text-4xl font-bold leading-7 text-white xl:mb-0">
									Join the adventure
								</h3>
								<p className="font-geist leading-7 text-white">
									VR platforms offer exciting spaces but finding events, worlds,
									experiences and communities is like navigating the early,
									chaotic internet.
								</p>
								<p className="font-geist leading-7 text-white">
									Interested in collaborating, want to learn more, or want to
									make a recommendation?
								</p>
								<p className="font-geist leading-7 text-white">
									Share your insights and help us craft the ideal digital
									future. Together, let&apos;s make the future we all want
									happen.
								</p>
							</div>
							<div className="mt-16 flex flex-col gap-4">
								<h2 className="font-dm-sans text-4xl font-bold leading-normal text-white">
									Get rewarded for subscribing
								</h2>
								<p className="font-geist leading-7 text-white">
									Our associate developers, supporters, and community
									contributors gain free access to early feature releases,
									exclusive behind-the-scenes content, and a community of
									visionaries shaping the future of entertainment.
								</p>
							</div>
						</div>
						<div className="my-16 flex size-full flex-col gap-4">
							<h1 className="font-dm-sans text-4xl font-bold leading-10 text-white xl:leading-7">
								Stay Connected
							</h1>
							<p className="font-geist text-base font-normal leading-7 text-white">
								Stay updated with our latest developments! Enter your email to
								join our community and receive exclusive news and updates on
								Enterlink, Enterverse, and more.
							</p>
							<p className="font-geist text-white">
								We look forward to staying in touch!
							</p>
							<form className="flex flex-col gap-8 pt-6 xl:w-2/3">
								<input
									required
									className="h-16 rounded-xl bg-gray-700 px-4 py-2"
									placeholder="Email"
									type="email"
								/>
								<textarea
									className="h-40 rounded-xl bg-gray-700 px-4 py-2"
									placeholder="Share your thoughts, interest or feedback (optional)"
								/>
								<button
									className="h-16 w-full rounded-xl bg-pink px-4 py-2 text-white xl:w-64"
									type="submit"
								>
									Join
								</button>
							</form>
						</div>
					</div>

					<footer className="flex h-96 w-full flex-col-reverse items-center justify-evenly gap-4 xl:h-48 xl:flex-row xl:justify-between xl:gap-2 xl:pb-24 xl:pt-36">
						<div className="flex flex-col justify-center gap-6">
							<div className="flex flex-col items-center gap-10 xl:flex-row xl:items-start xl:gap-0">
								<img
									className="h-16 w-24 xl:h-10 xl:w-16"
									src={VeuLogoTransparent}
								/>
								<div className="flex flex-col">
									<div className="flex flex-col">
										<p className="font-dm-sans text-sm text-gray-500">
											© VEU Inc. 2024 - All Rights Reserved
										</p>
									</div>
									<div className="flex flex-col">
										<p className="font-dm-sans text-sm text-gray-500">
											Terms of Service and Privacy Policy
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-4 flex flex-row gap-6 xl:absolute xl:left-1/2 xl:mt-0 xl:-translate-x-1/2">
							<a
								href="https://discord.enterverse.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Discord className="size-6" />
							</a>
							<a
								href="https://twitter.com/VEUverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Twitter className="size-6" />
							</a>
							<a
								href="https://www.instagram.com/veuverse/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Instagram className="size-6" />
							</a>
							<a
								href="https://www.facebook.com/VEUverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Facebook className="size-6" />
							</a>
							<a
								href="https://www.linkedin.com/company/veu-inc/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<LinkedIn className="size-6" />
							</a>

							<a
								href="https://medium.com/@veuverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Medium className="size-6" />
							</a>
						</div>
					</footer>
				</section>
			</div>
		</main>
	);
}
