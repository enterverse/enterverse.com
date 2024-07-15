import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import { Foldout, FoldoutTrigger, FoldoutContent } from "../foldout";
import {
	Carousel,
	CarouselBackButton,
	CarouselNextButton,
	CarouselItem
} from "../updated-carousel";
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
type CombinedImageInfo = ImageInfo | ImageInfo2;

const promoImages = [
	"/concept/ENTERVERSE.COM_Arch.jpg",
	"/concept/Enterverse_concept3.jpg",
	"/concept/ENTERVERSE.COM (2).jpg",
	"/concept/VEU_ENV_SplashArt_FinalPass_02b.jpg",
	"/concept/LS_OpeningPavilionFlyoverCutscene.0140.jpg",
	"/concept/LS_OpeningPavilionFlyoverCutscene.0296.jpg",
	"/concept/LS_OpeningPavilionFlyoverCutscene.0889.jpg",
	"/concept/LS_WebsiteStillsPavilion.0474.jpeg",
	"/concept/LS_WebsiteStillsPavilion.1589.jpg"
];
const vrchatImages = [
	"/vrchat/By.jpg",
	"/vrchat/image.webp",
	"/vrchat/VRChat_2023-04-21_21-39-37.233_3840x2160.png",
	"/vrchat/VRChat_2023-05-01_11-40-42.001_3840x2160.png",
	"/vrchat/VRChat_2023-06-02_00-29-28.530_2560x1440.webp",
	"/vrchat/VRChat_2023-07-08_21-40-06.689_3840x2160.webp",
	"/vrchat/VRChat_2023-11-19_00-37-25.603_3840x2160.png",
	"/vrchat/VRchatEvent.png",
	"/vrchat/www.enterverse.com_ (1).png",
	"/vrchat/www.enterverse.com_ (2).png",
	"/vrchat/www.enterverse.com_ (5).png",
	"/vrchat/www.enterverse.com_ (8).png"
];
const coreTeamImages: Array<ImageInfo> = [
	{
		url: "/core-team/MH-1-300x300+copy.jpg",
		name: "Michael Heilemann",
		position: "CTO"
	},
	{
		url: "/core-team/William-Garcia-1-300x279+copy.jpg",
		name: "William Garcia",
		position: "COO"
	},
	{
		url: "/core-team/MD1-300x300+copy.jpg",
		name: "Michael Depiro",
		position: "CMO"
	},
	{
		url: "/core-team/LoganD5.png",
		name: "Logan Desseyn",
		position: "Principal Software Developer"
	},
	{
		url: "/core-team/Bryce-300x300+copy.jpg",
		name: "Bryce Dichristofalo",
		position: "XR Director"
	},
	{
		url: "/core-team/Eva-300x300+copy.jpg",
		name: "Eva Petitot",
		position: "Lead Unity Environment Artist"
	},
	{
		url: "/core-team/MR-200x300+copy.jpg",
		name: "Michael Reed",
		position: "Principal 3D Modeler"
	},
	{
		url: "/core-team/Neil-1-300x300+copy.jpg",
		name: "Neil Blakemore",
		position: "Ethics Director"
	},
	{
		url: "/core-team/J-2-300x300+copy.jpg",
		name: "Jonah Keel",
		position: "Publicity"
	},
	{
		url: "/core-team/Gopal-2-200x300+copy.jpg",
		name: "Gopal Metro",
		position: "R&D Manager"
	},
	{
		url: "/core-team/GC-200x300+copy.jpg",
		name: "Giorgi Chitidze",
		position: "Lead Unreal Environment Artist"
	},
	{
		url: "/core-team/GK-1-300x293+copy.jpg",
		name: "Giorgi Koridze",
		position: "Lead Unreal Technical Artist"
	}
];

const associateTeamImages: Array<ImageInfo2> = [
	{
		url: "/associate/josephnapoli_panda.png",
		name: "Joseph Napoli"
	},
	{
		url: "/associate/AJ-ava-1-300x300+copy.jpg",
		name: "Adam Jones"
	},
	{
		url: "/associate/Tai-1-300x300+copy.jpg",
		name: "Tai Le"
	},
	{
		url: "/associate/OliverB-300x300+copy.jpg",
		name: "Oliver Beck"
	},
	{
		url: "/associate/Todd-1-300x300+copy.jpg",
		name: "Todd Casey"
	},
	{
		url: "/associate/rethsogan_associate.png",
		name: "Reth Sogen"
	},
	{
		url: "/associate/virtualilly_associate.png",
		name: "Virtualily"
	},
	{
		url: "/associate/shopow_future.png",
		name: "Shopow"
	},
	{
		url: "/associate/HashStudios_metaverse.png",
		name: "Hash Studios"
	}
];

const isActiveImageInfo = (image: CombinedImageInfo): image is ImageInfo => {
	return typeof image === "object" && "position" in image;
};

function useImageNavigator<T extends string | { url: string }>(
	images: Array<T>
) {
	const [activeImage, setActiveImage] = React.useState(0);

	const nextImage = () =>
		setActiveImage((current) => (current + 1) % images.length);
	const previousImage = () =>
		setActiveImage((current) => (current - 1 + images.length) % images.length);

	const getImageUrl = (image: T) =>
		typeof image === "string" ? image : image.url;

	return {
		activeImage: images[activeImage],
		getImageUrl,
		nextImage,
		previousImage
	};
}

// vite image algorithm from logan
// 67% top section

export default function Home() {
	//	const promoNavigator = useImageNavigator(promoImages);
	const vrchatNavigator = useImageNavigator(vrchatImages);
	const coreTeamNavigator = useImageNavigator(coreTeamImages);
	const associateTeamNavigator = useImageNavigator(associateTeamImages);
	const [isScrolled, setIsScrolled] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const lastScrollY = useRef(window.scrollY);

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
					className={`fixed top-0 z-50 flex h-32 w-full items-center justify-center bg-black/0 px-32 pt-8 transition-all duration-500 ${
						isScrolled ? "backdrop-blur-md" : ""
					} ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
				>
					<div className="absolute left-1/2 -translate-x-1/2 gap-6">
						<img
							className="h-16 w-60"
							src="\Logos\Enterverse logo v2.8_whitetext with shadow for BLACK AND COLOR BACKGROUNDS.png"
						/>
					</div>
					<nav className="ml-auto flex h-24 w-96 flex-row items-center justify-between">
						<Link to="/home">Home</Link>
						<Link to="/Enterlink">Enterlink</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</header>
				<section className="relative flex min-h-screen w-full flex-col items-center gap-16 space-x-0 bg-section1-gradient-darkened bg-cover px-32">
					<video
						autoPlay
						loop
						muted
						className="absolute size-full object-cover mix-blend-overlay"
						poster="/src/assets/concept/KoiFish.jpg"
						src="/Enterverse Playable-POC Teaser 1080P.mp4"
					/>
					<div className="relative flex w-full flex-col justify-center gap-16 pt-56">
						<div className="flex w-full flex-col gap-4">
							<h1 className="mb-4 w-full font-dm-sans text-7xl font-bold leading-snug text-white drop-shadow-section1">
								Find Meetups and Events <br /> in all your Virtual Realities
							</h1>
							<p className="font-geist text-xl leading-9 text-white drop-shadow-section1">
								Enterverse&apos;s soon-to-launch service, Enterlink, makes
								virtual social games and <br /> experiences accessible,
								connecting you to events, experiences, worlds, and <br />{" "}
								communities.
							</p>
						</div>
						<div className="flex flex-col gap-8">
							<p className="font-geist text-xl leading-9 text-white drop-shadow-section1">
								Interested in more? Join our community to stay updated with{" "}
								<br /> the latest updates on Enterlink.
							</p>
							<div className="flex w-full flex-row space-x-4">
								<button
									className="flex h-16 w-64 items-center justify-center space-x-4 rounded-lg bg-pink px-4 py-2 font-dm-sans text-white"
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
									<img className="size-8" src="\Logos\discord.svg" />
								</button>
								<button
									className="h-16 w-64 rounded-lg border-2 border-white px-4 py-2 font-dm-sans text-white"
									type="button"
								>
									<p className="font-semibold">What&apos;s Enterlink?</p>
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col items-center justify-center gap-16 p-32">
					<ErrorBoundary>
						<Carousel defaultCurrent={0} gap={1}>
							<CarouselBackButton className="carousel-back-button" />
							<div className="flex size-full space-x-5 overflow-hidden">
								{promoImages.map((image, index) => (
									<CarouselItem className="w-2/3 shrink-0" key={index}>
										<img
											alt={`Promo ${index + 1}`}
											className="size-full object-cover"
											src={image}
										/>
									</CarouselItem>
								))}
							</div>
							<CarouselNextButton className="carousel-next-button" />
						</Carousel>
					</ErrorBoundary>
				</section>

				<section className="flex min-h-screen w-full flex-col items-start justify-center bg-section2-gradient bg-cover p-32">
					<div className="flex w-full flex-row items-center justify-center">
						<div className="flex w-full flex-col items-start justify-center">
							<div className="mb-14 flex h-24 flex-row items-center gap-8">
								<img className="size-20" src="\Logos\enterlink logo.png" />
								<h1 className="font-geist text-6xl font-bold">enterlink</h1>
							</div>
							<div className="flex w-full flex-col items-start justify-center gap-16">
								<div className="flex flex-col gap-8">
									<h2 className="font-dm-sans text-6xl font-bold leading-tight text-white">
										Make plans and <br /> share with friends
									</h2>
									<p className="font-geist text-xl leading-9 text-white">
										Enterlink is our soon-to-launch service that makes virtual
										social games and <br /> experiences accessible, connecting
										you to events, experiences, worlds and <br /> communities.
									</p>
								</div>
								<div className="flex h-72 flex-col gap-8">
									<p className="font-geist text-xl leading-9 text-white">
										Stay updated with our latest developments! Join our
										community and receive <br /> exclusive news and updates on
										Enterlink, Enterverse, and more.
									</p>

									<form className="flex h-16 w-96 items-center overflow-hidden rounded-l-lg rounded-r-full border-2">
										<input
											className="flex-1 rounded-l-lg bg-transparent px-4 py-2"
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
												src="/Logos/arrow-right.svg"
											/>
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="flex w-1/2 items-center justify-center">
							<img alt="Vea Butterfly" src="VEA butterfly 512.png" />
						</div>
					</div>
					<div className="flex h-auto w-full flex-row items-start justify-center gap-16">
						<div className="flex flex-col gap-4">
							<p className="font-dm-sans text-2xl font-bold text-white">
								Here&apos;s the issue we saw
							</p>
							<h1 className="font-dm-sans text-4xl font-bold leading-tight text-white">
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
							<h1 className="font-dm-sans text-4xl font-bold leading-tight text-white">
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

				<section className="flex w-full flex-col items-start justify-center gap-16 bg-section3-gradient p-32">
					<div className="flex w-full flex-col items-start justify-center">
						<div className="flex w-1/2 flex-col gap-8">
							<h2 className="font-dm-sans text-6xl font-bold leading-tight text-white">
								We&apos;re helping you build your digital community
							</h2>
							<p className="font-geist text-xl leading-9 text-white">
								Our goal is to help build authentic social connections by
								bringing people together <br /> through a shared love of virtual
								entertainment and culture. We aim to make <br /> communities
								within Virtual Reality easily accessible to everyone.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-8 pb-32">
							<Foldout defaultOpen={true}>
								<div className="">
									<FoldoutTrigger asChild>
										<button
											type="button"
											onClick={vrchatNavigator.previousImage}
										>
											Previous
										</button>
									</FoldoutTrigger>
									<FoldoutContent>
										<img
											alt={`Slide ${vrchatNavigator.activeImage + 1}`}
											src={vrchatNavigator.activeImage}
											style={{ height: "512px", width: "853px" }}
										/>
									</FoldoutContent>
									<FoldoutTrigger asChild>
										<button type="button" onClick={vrchatNavigator.nextImage}>
											Next
										</button>
									</FoldoutTrigger>
								</div>
							</Foldout>
						</div>
						<div className="flex flex-col gap-16">
							<div className="flex h-full w-2/3 flex-col gap-8">
								<h1 className="font-dm-sans text-6xl font-bold leading-tight text-white">
									Meet the team
								</h1>
								<p className="font-geist text-xl leading-9 text-white">
									We&apos;re a team of developers and community contributors
									bridging the gap <br /> between today&apos;s reality and our
									shared vision of an ethical digital future centered <br />{" "}
									around communities and creators.
								</p>
							</div>
							<h1 className="font-dm-sans text-4xl font-bold text-white">
								Founders
							</h1>
							<div className="flex flex-row gap-4 pb-16">
								<div className="flex w-1/3 flex-col gap-6">
									<img
										className="rounded"
										src="\profiles\matthew_profile.png"
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
										className="rounded"
										src="\profiles\raf-3+copy.jpg"
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
										className="rounded"
										src="\profiles\nuno-2-1+copy.jpg"
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
							<h1 className="font-dm-sans text-4xl font-bold text-white">
								Core Team
							</h1>
							<div className="flex flex-row">
								<div className="flex flex-col">
									<Foldout defaultOpen={true}>
										<div className="">
											<FoldoutTrigger asChild>
												<button
													type="button"
													onClick={coreTeamNavigator.previousImage}
												>
													Previous
												</button>
											</FoldoutTrigger>
											<FoldoutContent>
												<div className="flex flex-col">
													<img
														style={{ width: "256px", height: "256px" }}
														src={coreTeamNavigator.getImageUrl(
															coreTeamNavigator.activeImage
														)}
													/>
													{isActiveImageInfo(coreTeamNavigator.activeImage) && (
														<>
															<h2 className="font-dm-sans text-2xl text-white">
																{coreTeamNavigator.activeImage.name}
															</h2>
															<p className="font-geist text-xl text-white">
																{coreTeamNavigator.activeImage.position}
															</p>
														</>
													)}
												</div>
											</FoldoutContent>
											<FoldoutTrigger asChild>
												<button
													type="button"
													onClick={coreTeamNavigator.nextImage}
												>
													Next
												</button>
											</FoldoutTrigger>
										</div>
									</Foldout>
									{/* <img src="" style={{ height: "256px", width: "256px" }} />
										<p className="font-dm-sans text-2xl text-white">
											Michael Heilemann
										</p>
										<p className="font-geist text-xl text-white">CTO</p> */}
								</div>
								<div className="flex flex-col">
									<img />
									<p className="font-dm-sans text-2xl text-white">
										William Garcia
									</p>
									<p className="font-geist text-white">COO</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="font-dm-sans text-2xl text-white">
										Michael Depiro
									</p>
									<p className="font-geist text-white">CMO</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="font-dm-sans text-2xl text-white">
										Logan Desseyn
									</p>
									<p className="font-geist text-white">
										Principal Software Developer
									</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-2xl text-white">Bryce Dichristofalo</p>
									<p className="text-white">XR Director</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-2xl text-white">Eva Petitot</p>
									<p className="text-white">Lead Unity Environment Artist</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-2xl text-white">Michael Reed</p>
									<p className="text-white">Principal 3D Modeler</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Neil Blakemore</p>
									<p className="text-white">Ethics Director</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Jonah Keel</p>
									<p className="text-white">Publicity</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Gopal Metro</p>
									<p className="text-white">R&D Manager</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Giorgi Chitidze</p>
									<p className="text-white">Lead Unreal Environment Artist</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Giorgi Koridze</p>
									<p className="text-white">Lead Unreal Technical Artist</p>
								</div>
							</div>
							<h1 className="font-dm-sans text-4xl font-bold text-white">
								Associate developers and creators
							</h1>
							<div className="flex flex-row">
								<Foldout defaultOpen={true}>
									<div className="">
										<FoldoutTrigger asChild>
											<button
												type="button"
												onClick={associateTeamNavigator.previousImage}
											>
												Previous
											</button>
										</FoldoutTrigger>
										<FoldoutContent>
											<div className="flex flex-col">
												<img
													style={{ width: "192px", height: "192px" }}
													src={associateTeamNavigator.getImageUrl(
														associateTeamNavigator.activeImage
													)}
												/>
												{typeof associateTeamNavigator.activeImage !==
													"string" && (
													<h2 className="text-white">
														{associateTeamNavigator.activeImage.name}
													</h2>
												)}
											</div>
										</FoldoutContent>
										<FoldoutTrigger asChild>
											<button
												type="button"
												onClick={associateTeamNavigator.nextImage}
											>
												Next
											</button>
										</FoldoutTrigger>
									</div>
								</Foldout>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Joseph Napoli</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Sullivan Huebner</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Adam Jones</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Tai Le</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Oliver Beck</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Todd Casey</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">“Reth Sogen”</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">“Virtualily”</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">“Shopow”</p>
								</div>
								<div className="flex flex-col">
									<img />
									<p className="text-white">Hash Studios</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="flex w-full flex-col items-start justify-center  bg-footer-gradient px-32 pt-32">
					<h2 className="font-dm-sans text-6xl font-bold leading-tight text-white">
						Interested in more?
					</h2>
					<div className="flex flex-row items-start justify-center gap-32">
						<div className="flex w-full flex-col gap-16 pr-32">
							<div className="my-16 flex flex-col gap-6">
								<h3 className="font-dm-sans text-4xl font-bold leading-7 text-white">
									Join the adventure
								</h3>
								<p className="font-geist leading-7 text-white">
									VR platforms offer exciting spaces but finding events, worlds,
									experiences and <br /> communities is like navigating the
									early, chaotic internet.
								</p>
								<p className="font-geist leading-7 text-white">
									Interested in collaborating, want to learn more, or want to
									make a recommendation?
								</p>
								<p className="font-geist leading-7 text-white">
									Share your insights and help us craft the ideal digital
									future. Together, let&apos;s make the <br /> future we all
									want happen.
								</p>
							</div>
							<div className="my-16 flex flex-col gap-4">
								<h2 className="font-dm-sans text-4xl font-bold text-white">
									Get rewarded for subscribing
								</h2>
								<p className="font-geist leading-7 text-white">
									Our associate developers, supporters, and community
									contributors gain free access to <br /> early feature
									releases, exclusive behind-the-scenes content, and a community
									of <br />
									visionaries shaping the future of entertainment.
								</p>
							</div>
						</div>
						<div className="my-16 flex size-full flex-col gap-4">
							<h1 className="font-dm-sans text-4xl font-bold leading-7 text-white">
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
							<form className="flex w-2/3 flex-col gap-8 pt-6">
								<input
									required
									className="h-16 rounded-lg bg-gray-700 px-4 py-2"
									placeholder="Email"
									type="email"
								/>
								<textarea
									className="h-40 rounded-lg bg-gray-700 px-4 py-2"
									placeholder="Share your thoughts, interest or feedback (optional)"
								/>
								<button
									className="h-16 w-64 rounded-lg bg-pink px-4 py-2 text-white"
									type="submit"
								>
									Join
								</button>
							</form>
						</div>
					</div>

					<footer className="flex h-48 w-full flex-row items-center justify-between gap-2 pb-24 pt-16">
						<div className="flex flex-col gap-4">
							<div className="flex flex-row">
								<img
									className="h-10 w-16"
									src="\Logos\VEU_logo_transparent w shadow.png"
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
						<div className="absolute left-1/2 flex -translate-x-1/2 flex-row gap-6">
							<a
								href="https://discord.enterverse.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="\Logos\discord.svg" />
							</a>
							<a
								href="https://twitter.com/VEUverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="\Logos\twitter.svg" />
							</a>
							<a
								href="https://www.instagram.com/veuverse/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="\Logos\instagram.svg" />
							</a>
							<a
								href="https://www.facebook.com/VEUverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="\Logos\facebook.svg" />
							</a>
							<a
								href="https://www.linkedin.com/company/veu-inc/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="\Logos\linkedin.svg" />
							</a>

							<a
								href="https://medium.com/@veuverse"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img className="size-6" src="\Logos\medium.svg" />
							</a>
						</div>
					</footer>
				</section>
			</main>
		</body>
	);
}
