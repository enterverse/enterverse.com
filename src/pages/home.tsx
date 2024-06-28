export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-64 px-32 pt-32">
			<div className="bg-gradient-overlay absolute inset-0 bg-custom-image bg-cover drop-shadow-custom" />
			<section
				className="relative flex h-auto w-full flex-col items-center justify-center gap-16 space-x-0"
				style={{
					height: "824px",
					width: "1664px"
				}}
			>
				<div className="flex h-96 w-full flex-col justify-center gap-32">
					<div className="flex h-36 flex-col gap-4 ">
						<h1 className="mb-4 w-full text-7xl font-bold text-white">
							Bridging reality with <br />
							the digital future
						</h1>
						<p className="text-white">
							Enterverse&apos;s soon-to-launch service, Enterlink, makes virtual
							world accessible, <br /> connecting you to events, experiences,
							and communities.
						</p>
					</div>
					<div className="flex flex-col gap-8">
						<p className="text-white">
							Interested in more? Join our community to stay updated with <br />{" "}
							the latest updates on Enterlink.
						</p>
						<div className="flex flex-row space-x-2">
							<button
								className="rounded-lg bg-pink px-4 py-2 text-white"
								type="button"
							>
								Join our Discord
							</button>
							<button
								className="rounded-lg border-2 border-white px-4 py-2 text-white"
								type="button"
							>
								What&apos;s Enterlink?
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="flex h-auto w-full flex-col items-center justify-center space-x-0 md:flex-row md:space-x-2">
				<div className="flex h-auto w-full flex-col items-center justify-center">
					image carosel
				</div>
			</section>

			<section
				className="flex flex-col items-start justify-center"
				style={{
					height: "1184px",
					width: "1664px"
				}}
			>
				<div
					className="flex flex-col items-start justify-center"
					style={{
						height: "843px",
						width: "1664px"
					}}
				>
					<div
						className="flex flex-col gap-8"
						style={{
							height: "323px",
							width: "768px"
						}}
					>
						<h2 className="text-4xl font-bold text-white">
							Let&apos;s navigate the <br />
							chaos of virtual worlds <br /> with ease
						</h2>
						<p className="text-white">
							Enterlink is our soon-to-launch service that makes virtual worlds
							accessible, <br /> connecting you to events, experiences, and
							communities.
						</p>
					</div>
					<div className="flex flex-col gap-8">
						<p className="text-white">
							Stay updated with our latest developments! Join our community and
							receive <br /> exclusive news and updates on Enterlink,
							Enterverse, and more.
						</p>
						<form className="flex rounded border-2">
							<input
								className="rounded-lg bg-transparent px-4 py-2"
								placeholder="Email your email"
								type="email"
							/>
							<button
								className="rounded-lg bg-pink px-4 py-2 text-white"
								type="submit"
							/>
						</form>
					</div>
				</div>
				<div
					className="flex h-auto w-full flex-row items-start justify-center gap-16"
					style={{
						height: "341px",
						width: "1664px"
					}}
				>
					<div className="flex flex-col gap-4">
						<p className="text-white">Here&apos;s the issue we saw</p>
						<h1 className="text-4xl text-white">
							It&apos;s not easy finding events, worlds, and experiences
						</h1>
						<p className="text-white">
							VR platforms offer exciting spaces but finding events, worlds,
							experiences and communities is like navigating the early, chaotic
							internet.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-white">Here&apos;s our solution </p>
						<h1 className="text-4xl text-white">
							An easy-to-navigate platform for VR events and community building
						</h1>
						<p className="text-white">
							Enterlink maps and organizes virtual worlds, making it easy to
							find and join events across different platforms.
						</p>
					</div>
				</div>
			</section>

			<section
				className="flex w-full flex-col items-start justify-center gap-16"
				style={{
					height: "3681px",
					width: "1664px"
				}}
			>
				<div className="flex w-full flex-col items-start justify-center">
					<div
						className="flex flex-col gap-8"
						style={{ height: "350px", width: "768px" }}
					>
						<h2 className="text-4xl font-bold text-white">
							We&apos;re building a digital community
						</h2>
						<p className="text-white">
							Our goal is to help build authentic social connections by bringing
							people together through a shared love of virtual entertainment and
							culture. We aim to make communities within Virtual Reality easily
							accessible to everyone.
						</p>
					</div>
					<div
						className="flex flex-col justify-center gap-8"
						style={{ height: "512px" }}
					>
						<img
							className=""
							src="VRChat_2023-05-01_11-40-42.001_3840x2160.png"
							style={{ height: "512px", width: "853px" }}
						/>
					</div>
					<div className="flex flex-col gap-16" style={{ height: "2691px" }}>
						<div
							className="flex flex-col gap-8"
							style={{ height: "341px", width: "768px" }}
						>
							<h1 className="text-4xl font-bold text-white">Meet the team</h1>
							<p className="text-white">
								We&apos;re a team of developers and community contributors
								bridging the gap <br /> between today&apos;s reality and our
								shared vision of an ethical digital future centered <br />{" "}
								around communities and creators.
							</p>
						</div>
						<h1 className="text-4xl text-white">Founders</h1>
						<div
							className="flex flex-row gap-4 pb-16"
							style={{ height: "823px" }}
						>
							<div className="flex w-1/3 flex-col gap-4">
								<img
									className="rounded"
									src="\profiles\matthew_profile.png"
									style={{ height: "512px", width: "512px" }}
								/>
								<p className="text-4xl text-white">Matthew Brewbaker</p>
								<p className="text-2xl text-white">Co-Founder, CEO</p>
								<p className="text-white">
									Matthew Brewbaker melds his film production savvy with a
									mastery of gaming and software workflows, steering the company
									towards groundbreaking VR experiences.
								</p>
							</div>
							<div className="flex w-1/3 flex-col gap-4">
								<img
									className="rounded"
									src="\profiles\raf-3+copy.jpg"
									style={{ height: "512px", width: "512px" }}
								/>
								<p className="text-4xl text-white">Raphael Arkera</p>
								<p className="text-2xl text-white">Co-Founder, CCO</p>
								<p className="text-white">
									Raphael Arkera leverages his creative direction prowess, honed
									with giants like Marvel, Netflix, and Imaginarium Studios, to
									infuse VEU Inc. with innovative VR event concepts.
								</p>
							</div>
							<div className="flex w-1/3 flex-col gap-4">
								<img
									className="rounded"
									src="\profiles\nuno-2-1+copy.jpg"
									style={{ height: "512px", width: "512px" }}
								/>
								<p className="text-4xl text-white">Nuno Rivotti</p>
								<p className="text-2xl text-white">Co-Founder, CPO</p>
								<p className="text-white">
									Nuno Rivotti blends insights from film, games, and blockchain,
									enriching VEU&apos;s product strategy with experience from
									founding the Trojan Horse Was a Unicorn convention.
								</p>
							</div>
						</div>
						<h1 className="text-white">Core Team</h1>
						<div className="flex flex-row">
							<div className="flex flex-col">
								<img />
								<p className="text-2xl text-white">Michael Heilemann</p>
								<p className="text-xl text-white">CTO</p>
							</div>
							<div className="flex flex-col">
								<img />
								<p className="text-2xl text-white">William Garcia</p>
								<p className="text-white">COO</p>
							</div>
							<div className="flex flex-col">
								<img />
								<p className="text-2xl text-white">Michael Depiro</p>
								<p className="text-white">CMO</p>
							</div>
							<div className="flex flex-col">
								<img />
								<p className="text-2xl text-white">Logan Desseyn</p>
								<p className="text-white">Principal Software Developer</p>
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
						<div className="flex flex-row">
							<h1 className="text-white">Associate developers and creators</h1>
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

			<section
				className="flex w-full flex-col items-center justify-center"
				style={{ height: "775px" }}
			>
				<h2 className="text-5xl font-bold text-white">Interested in more?</h2>
				<div className="flex flex-row items-start justify-center">
					<div
						className="flex w-full flex-col gap-16 pr-32"
						style={{ height: "702px" }}
					>
						<div className="my-16 flex flex-col gap-4">
							<h3 className="text-4xl font-bold text-white">
								Join the adventure
							</h3>
							<p className="text-white">
								VR platforms offer exciting spaces but finding events, worlds,
								experiences and communities is like navigating the early,
								chaotic internet.
							</p>
							<p className="text-white">
								Interested in collaborating, want to learn more, or want to make
								a recommendation?
							</p>
							<p className="text-white">
								Share your insights and help us craft the ideal digital future.
								Together, let&apos;s make the future we all want happen.
							</p>
						</div>
						<div className="my-16 flex flex-col gap-4">
							<h2 className="text-4xl font-bold text-white">
								Get rewarded for subscribing
							</h2>
							<p className="text-white">
								Our associate developers, supporters, and community contributors
								gain free access to early feature releases, exclusive
								behind-the-scenes content, and a community of visionaries
								shaping the future of entertainment.
							</p>
						</div>
					</div>
					<div className="my-16 flex size-full flex-col gap-4">
						<h1 className="text-4xl font-bold text-white">Stay Connected</h1>
						<p className="text-white">
							Stay updated with our latest developments! Enter your email to
							join our community and receive exclusive news and updates on
							Enterlink, Enterverse, and more.
						</p>
						<p className="text-white">We look forward to staying in touch!</p>
						<form
							className="flex flex-col gap-8 pt-6"
							style={{ height: "384px", width: "512px" }}
						>
							<input
								required
								className="h-16 rounded-lg bg-gray-700 px-4 py-2"
								placeholder="Email"
								type="email"
							/>
							<input
								className="h-40 rounded-lg bg-gray-700 px-6 py-2"
								placeholder="Share your thoughts, interest or feedback (optional)"
								type="text"
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
			</section>
		</main>
	);
}
