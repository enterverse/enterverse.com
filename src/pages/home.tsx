import { useState, useEffect, useRef } from "react";

import {
	Carousel,
	CarouselItems,
	CarouselBackButton,
	CarouselNextButton,
	CarouselItem
} from "../carousel.tsx";
import ErrorBoundary from "../error-boundary";

interface ImageInfo {
	url: string;
	name: string;
	position: string;
}
interface ImageInfo2 {
	url: string;
	name: string;
}
interface ImageInfo3 {
	url: string;
	name: string;
	position: string;
	description: string;
}

const promoImages = [
	"/src/assets/concept/Arch.jpg",
	"/src/assets/concept/DiscoGreen.jpg",
	"/src/assets/concept/KoiFish.jpg",
	"/src/assets/concept/VEU_ENV_Full_Island.jpg",
	"/src/assets/concept/PavilionGuyLookingUp.jpg",
	"/src/assets/concept/LookingUpDome.jpg",
	"/src/assets/concept/DomeDiscoveryFish.jpg",
	"/src/assets/concept/LightDJ.jpeg",
	"/src/assets/concept/GreenJacketGuy.jpg"
];
const vrchatImages = [
	"/src/assets/vrchat/EpicSoloPhoto.png",
	"/src/assets/vrchat/SoloIntoTheFuture.webp",
	"/src/assets/vrchat/6PersonWave.webp",
	"/src/assets/vrchat/PraisetheSun.webp",
	"/src/assets/vrchat/Bye.jpg",
	"/src/assets/vrchat/CourtAndManyCats.png",
	"/src/assets/vrchat/GroupPhoto.png",
	"/src/assets/vrchat/PianoSolo.png",
	"/src/assets/vrchat/BatPerson.png",
	"/src/assets/vrchat/Singing.png",
	"/src/assets/vrchat/VRchatEvent.png",
	"/src/assets/vrchat/heheFaceCover.png"
];
const coreTeamImages: Array<ImageInfo> = [
	{
		url: "/src/assets/core-team/MHeilemann.jpg",
		name: "Michael Heilemann",
		position: "CTO"
	},
	{
		url: "/src/assets/core-team/WilliamGarcia.jpg",
		name: "William Garcia",
		position: "COO"
	},
	{
		url: "/src/assets/core-team/MDepiro.jpg",
		name: "Michael Depiro",
		position: "CMO"
	},
	{
		url: "/src/assets/core-team/LoganD.png",
		name: "Logan Desseyn",
		position: "Principal Software Developer"
	},
	{
		url: "/src/assets/core-team/Bryce.jpg",
		name: "Bryce Dichristofalo",
		position: "XR Director"
	},
	{
		url: "/src/assets/core-team/EvaPetitot.png",
		name: "Eva Petitot",
		position: "Lead Unity Environment Artist"
	},
	{
		url: "/src/assets/core-team/MReed.jpg",
		name: "Michael Reed",
		position: "Principal 3D Modeler"
	},
	{
		url: "/src/assets/core-team/NeilBlakemore.jpg",
		name: "Neil Blakemore",
		position: "Ethics Director"
	},
	{
		url: "/src/assets/core-team/JonahKeel.jpg",
		name: "Jonah Keel",
		position: "Publicity"
	},
	{
		url: "/src/assets/core-team/Gopal.jpg",
		name: "Gopal Metro",
		position: "R&D Manager"
	},
	{
		url: "/src/assets/core-team/GC.jpg",
		name: "Giorgi Chitidze",
		position: "Lead Unreal Environment Artist"
	},
	{
		url: "/src/assets/core-team/GK.jpg",
		name: "Giorgi Koridze",
		position: "Lead Unreal Technical Artist"
	}
];

const associateTeamImages: Array<ImageInfo2> = [
	{
		url: "/src/assets/associate/josephnapoli_panda.png",
		name: "Joseph Napoli"
	},
	{
		url: "/src/assets/associate/adam_jones.jpg",
		name: "Adam Jones"
	},
	{
		url: "/src/assets/associate/TaiLe.jpg",
		name: "Tai Le"
	},
	{
		url: "/src/assets/associate/OliverB.jpg",
		name: "Oliver Beck"
	},
	{
		url: "/src/assets/associate/ToddCasey.jpg",
		name: "Todd Casey"
	},
	{
		url: "/src/assets/associate/rethsogan.png",
		name: "Reth Sogen"
	},
	{
		url: "/src/assets/associate/virtualilly.png",
		name: "Virtualily"
	},
	{
		url: "/src/assets/associate/shopow.png",
		name: "Shopow"
	},
	{
		url: "/src/assets/associate/HashStudios.png",
		name: "Hash Studios"
	}
];
const founderTeamImages: Array<ImageInfo3> = [
	{
		url: "/src/assets/profiles/matthew_profile.png",
		name: "Matthew Brewbaker",
		position: "Co-Founder, CEO",
		description:
			"Matthew Brewbaker melds his film production savvy with a mastery of gaming and software workflows, steering the company towards groundbreaking VR experiences."
	},
	{
		url: "/src/assets/profiles/raphael_profile.jpg",
		name: "Raphael Arkera",
		position: "Co-Founder, CCO",
		description:
			"Raphael Arkera leverages his creative direction prowess, honed with giants like Marvel, Netflix, and Imaginarium Studios, to infuse VEU Inc. with innovative VR event concepts."
	},

	{
		url: "/src/assets/profiles/nuno_profile.jpg",
		name: "Nuno Rivotti",
		position: "Co-Founder, CPO",
		description:
			"Nuno Rivotti blends insights from film, games, and blockchain, enriching VEU's product strategy with experience from founding the Trojan Horse Was a Unicorn convention."
	}
];

// vite image algorithm from logan
// 67% top section (when you zoom out)
// sidebar color
// Foudners carousel debugging. Clash with carousel vs not.
// some text near bottom not wrapping on mobile size.
// change the stretch on gopal and michael reed
// useeffect to close menu on scroll
// for header turn the menu to an x and leave Enterverse the same

export default function Home() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const lastScrollY = useRef(window.scrollY);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrolled = currentScrollY > 0;
			setIsScrolled(scrolled);

			const shouldShowHeader =
				currentScrollY <= lastScrollY.current || !scrolled;
			setShowHeader(shouldShowHeader);

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
	}, []);

	return (
		<body className="bg-overall-gradient">
			<main className="flex min-h-screen flex-col items-center justify-between">
				<header
					className={`fixed top-0 z-50 flex h-32 w-full items-center justify-between bg-black/0 px-8 pt-8 transition-all duration-500 xl:justify-center xl:px-32 ${
						isScrolled ? "backdrop-blur-md" : ""
					} ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
				>
					<div className="absolute left-1/2 -translate-x-1/2 gap-6">
						<img
							className="h-16 w-60"
							src="/src/assets/Logos/EnterverseWhiteTextBlackBackground.png"
						/>
					</div>

					<nav className="ml-auto hidden h-24 w-96 flex-row items-center justify-between xl:flex">
						<a href="#home">Home</a>

						<a href="#Enterlink">Enterlink</a>

						<a href="#about">About</a>

						<a href="#contact">Contact</a>
					</nav>
					<button
						className="ml-auto xl:hidden"
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<img alt="open menu button" src="/src/assets/Logos/menu.svg" />
					</button>
					{isMenuOpen && (
						<div className="bg-mobile-gradient fixed left-0 top-0 z-40 h-screen w-full">
							<div className="flex h-32 w-full items-center justify-between px-12">
								<div className="flex flex-1 items-center justify-start">
									<img
										className="h-16 w-48"
										src="/src/assets/Logos/EnterverseWhiteTextBlackBackground.png"
									/>
								</div>
								<div className="flex flex-1 items-center justify-end">
									<button
										className="right-20 py-4 pl-4"
										type="button"
										onClick={() => setIsMenuOpen(false)}
									>
										<img
											alt="close menu button"
											className="size-5"
											src="src/assets/Logos/close.svg"
										/>
									</button>
								</div>
							</div>
							<nav className="absolute right-0 top-1/2 mr-20 flex -translate-y-1/2 flex-col items-end">
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
					)}
				</header>
				<section
					className="xl::px-32 relative flex min-h-screen w-full flex-col items-center gap-16 space-x-0 bg-section1-gradient-darkened bg-cover px-8 lg:px-16"
					id="home"
				>
					<video
						autoPlay
						loop
						muted
						className="absolute size-full object-cover mix-blend-overlay"
						poster="/src/assets/concept/KoiFish.jpg"
						src="/src/assets/concept/EnterverseTrailer1080P.mp4"
					/>
					<div className="relative flex flex-col justify-center gap-16 pt-32 md:pt-56 xl:w-full">
						<div className="flex w-full flex-col gap-4 xl:w-2/3">
							<h1 className="mb-4 w-full text-balance font-dm-sans text-4xl font-bold leading-relaxed text-white drop-shadow-section1 md:text-7xl">
								Find Meetups and Events in all your Virtual Realities
							</h1>
							<p className="w-full text-balance font-geist text-base leading-9 text-white drop-shadow-section1 md:text-xl xl:w-2/3">
								We know how hard it is to plan your hangouts in virtual spaces.
								Enterverse&apos;s soon-to-launch service, Enterlink, makes
								virtual social games and experiences accessible, connecting you
								to events, experiences, worlds, and communities.
							</p>
						</div>
						<div className="mb-16 flex w-full flex-col gap-8 xl:mb-0 xl:w-2/3">
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
									<img className="size-8" src="/src/assets/Logos/discord.svg" />
								</button>
								<button
									className="h-16 w-full rounded-xl border-2 border-white px-4 py-2 font-dm-sans text-white xl:w-64"
									type="button"
								>
									<p className="font-semibold">What&apos;s Enterlink?</p>
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col items-center justify-center gap-16 p-8 xl:min-h-screen xl:p-32">
					<ErrorBoundary>
						<Carousel className="relative h-64 w-full xl:h-[48rem]">
							<CarouselBackButton className="absolute left-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
								{"<"}
							</CarouselBackButton>
							<CarouselItems className="relative z-10 flex gap-6 duration-500">
								{promoImages.map((image, index) => (
									<CarouselItem
										className="flex aspect-video h-64 flex-col items-center justify-center rounded-lg bg-neutral-900 xl:h-[48rem]"
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
							<CarouselNextButton className="absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
								{">"}
							</CarouselNextButton>
						</Carousel>
					</ErrorBoundary>
				</section>

				<section
					className="flex min-h-screen w-full flex-col items-start justify-center bg-section2-gradient bg-cover p-8 xl:p-32"
					id="Enterlink"
				>
					<div className="mt-12 flex w-full flex-col items-center justify-center xl:mt-0 xl:flex-row">
						<div className="flex w-full flex-col items-start justify-center">
							<div className="mb-14 flex h-24 flex-row items-center gap-8">
								<img
									className="size-20 xl:size-20"
									src="/src/assets/Logos/enterlink logo.png"
								/>
								<h1 className="font-geist text-5xl font-bold xl:text-6xl">
									enterlink
								</h1>
							</div>
							<div className="flex w-full flex-col items-start justify-center gap-16">
								<div className="flex flex-col gap-8">
									<h2 className="mt-6 font-dm-sans text-5xl font-bold leading-tight text-white xl:mt-0 xl:text-6xl">
										Make plans and share with friends
									</h2>
									<p className="font-geist text-base leading-9 text-white xl:text-xl">
										Enterlink is our soon-to-launch service that makes virtual
										social games and experiences accessible, connecting you to
										events, experiences, worlds and communities.
									</p>
								</div>
								<div className="flex h-72 flex-col gap-8">
									<p className="font-geist text-base leading-9 text-white xl:text-xl">
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
											<img
												alt="Submit"
												className="size-6"
												src="/src/assets/Logos/arrow-right.svg"
											/>
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="mb-44 mt-12 flex w-full items-center justify-center xl:my-0 xl:w-1/2">
							<img
								alt="Vea Butterfly"
								className="size-96"
								src="/src/assets/concept/VEA_butterfly.png"
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
					className="flex w-full flex-col items-start justify-center gap-16 bg-section3-gradient xl:p-32"
					id="about"
				>
					<div className="flex w-full flex-col items-start justify-center gap-16 xl:gap-32">
						<div className="flex flex-col gap-8 p-8 xl:w-1/2 ">
							<h2 className="mb-6 mt-12 font-dm-sans text-5xl font-bold leading-tight text-white xl:mt-0 xl:text-6xl xl:leading-loose">
								We&apos;re helping you build your digital community
							</h2>
							<p className="font-geist text-base leading-9 text-white xl:text-xl">
								Our goal is to help build authentic social connections by
								bringing people together through a shared love of virtual
								entertainment and culture. We aim to make communities within
								Virtual Reality easily accessible to everyone.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-8 pb-16 pt-12 xl:pb-32">
							<ErrorBoundary>
								<Carousel className="relative h-64 xl:h-[32rem]">
									<CarouselBackButton className="absolute left-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
										{"<"}
									</CarouselBackButton>
									<CarouselItems className="relative z-10 gap-6 object-cover duration-500">
										{vrchatImages.map((image, index) => (
											<CarouselItem
												className="flex h-64 flex-col items-center justify-center rounded-lg bg-neutral-900 xl:h-[32rem]"
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
									<CarouselNextButton className="absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
										{">"}
									</CarouselNextButton>
								</Carousel>
							</ErrorBoundary>
						</div>
						<div className="flex  w-full  flex-col items-start justify-center gap-12">
							<div className="flex size-full flex-col gap-8 px-8 xl:w-2/3">
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
							<h1 className="mt-4 px-8 font-dm-sans text-4xl font-bold text-white xl:text-4xl ">
								Founders
							</h1>
							<Carousel className="relative flex h-[38rem] w-full gap-12 p-2 xl:mb-16 xl:hidden">
								<CarouselBackButton className="absolute left-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-neutral-950 to-transparent opacity-0 transition-opacity hover:opacity-100">
									{"<"}
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-12 duration-500">
									{founderTeamImages.map((member, index) => (
										<CarouselItem
											className="flex h-[38rem] w-64 flex-col items-start justify-start gap-8 rounded-lg"
											key={index}
										>
											<img
												alt={member.name}
												className="size-64 rounded-lg"
												src={member.url}
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
								<CarouselNextButton className="absolute right-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-neutral-950 to-transparent opacity-0 transition-opacity hover:opacity-100">
									{">"}
								</CarouselNextButton>
							</Carousel>

							<div className="hidden flex-row gap-4 pb-16 xl:flex">
								<div className="flex w-1/3 flex-col gap-6">
									<img
										className="rounded-xl"
										src="/src/assets/profiles/matthew_profile.png"
										style={{ height: "512px", width: "512px" }}
									/>
									<p className="font-dm-sans text-4xl text-white">
										Matthew Brewbaker
									</p>
									<p className="font-dm-sans text-2xl text-white">
										Co-Founder, CEO
									</p>
									<p className="font-geist leading-7 text-white">
										Matthew Brewbaker melds his film production savvy with a
										mastery of gaming and software workflows, steering the
										company towards groundbreaking VR experiences.
									</p>
								</div>
								<div className="flex w-1/3 flex-col gap-6">
									<img
										className="rounded-xl"
										src="/src/assets/profiles/raphael_profile.jpg"
										style={{ height: "512px", width: "512px" }}
									/>
									<p className="font-dm-sans text-4xl text-white">
										Raphael Arkera
									</p>
									<p className="font-dm-sans text-2xl text-white">
										Co-Founder, CCO
									</p>
									<p className="font-geist leading-7 text-white">
										Raphael Arkera leverages his creative direction prowess,
										honed with giants like Marvel, Netflix, and Imaginarium
										Studios, to infuse VEU Inc. with innovative VR event
										concepts.
									</p>
								</div>
								<div className="flex w-1/3 flex-col gap-6">
									<img
										className="rounded-xl"
										src="/src/assets/profiles/nuno_profile.jpg"
										style={{ height: "512px", width: "512px" }}
									/>
									<p className="font-dm-sans text-4xl text-white">
										Nuno Rivotti
									</p>
									<p className="font-dm-sans text-2xl text-white">
										Co-Founder, CPO
									</p>
									<p className="font-geist leading-7 text-white">
										Nuno Rivotti blends insights from film, games, and
										blockchain, enriching VEU&apos;s product strategy with
										experience from founding the Trojan Horse Was a Unicorn
										convention.
									</p>
								</div>
							</div>
							<h1 className="mt-12 px-8 font-dm-sans text-4xl font-bold text-white">
								Core Team
							</h1>
							<Carousel className="relative m-2 h-[22rem] xl:mb-16">
								<CarouselBackButton className="absolute left-0 top-0 z-20 h-[22rem] w-14 bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									{"<"}
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-6  duration-500">
									{coreTeamImages.map((member, index) => (
										<CarouselItem
											className="flex h-[22rem] flex-col items-start justify-start gap-4 rounded-lg"
											key={index}
										>
											<img
												alt={member.name}
												className="size-64 rounded-lg"
												src={member.url}
											/>
											<p className="font-dm-sans text-2xl font-bold leading-9 text-white">
												{member.name}
											</p>
											<p className="font-dm-sans text-xl text-white">
												{member.position}
											</p>
										</CarouselItem>
									))}
								</CarouselItems>
								<CarouselNextButton className="sticky right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									{">"}
								</CarouselNextButton>
							</Carousel>

							<h1 className="mt-16 px-8 font-dm-sans text-4xl font-bold text-white">
								Associate developers and creators
							</h1>
							<Carousel className="relative mb-8 h-60 xl:mb-32">
								<CarouselBackButton className="absolute left-0 top-0 z-20 h-full w-14 bg-gradient-to-r from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									{"<"}
								</CarouselBackButton>
								<CarouselItems className="relative z-10 gap-6 duration-500">
									{associateTeamImages.map((member, index) => (
										<CarouselItem
											className="flex h-60 flex-col items-center justify-start gap-4 rounded-lg"
											key={index}
										>
											<img
												alt={member.name}
												className="size-48 rounded-lg object-cover"
												src={member.url}
											/>
											<p className="font-dm-sans text-2xl text-white">
												{member.name}
											</p>
										</CarouselItem>
									))}
								</CarouselItems>
								<CarouselNextButton className="sticky right-0 top-0 z-20 h-full w-14 bg-gradient-to-l from-neutral-950 to-transparent opacity-15 transition-opacity hover:opacity-100">
									{">"}
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
									src="/src/assets/Logos/VEU_logo_transparent.png"
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
								<img className="size-6" src="/src/assets/Logos/discord.svg" />
							</a>
							<a
								href="https://twitter.com/VEUverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="/src/assets/Logos/twitter.svg" />
							</a>
							<a
								href="https://www.instagram.com/veuverse/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="/src/assets/Logos/instagram.svg" />
							</a>
							<a
								href="https://www.facebook.com/VEUverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="/src/assets/Logos/facebook.svg" />
							</a>
							<a
								href="https://www.linkedin.com/company/veu-inc/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="/src/assets/Logos/linkedin.svg" />
							</a>

							<a
								href="https://medium.com/@veuverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="/src/assets/Logos/medium.svg" />
							</a>
						</div>
					</footer>
				</section>
			</main>
		</body>
	);
}
