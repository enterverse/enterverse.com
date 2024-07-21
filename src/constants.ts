// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type WebpImport = typeof import("*.webp");

export interface ImageInfoExecutive {
	img: WebpImport;
	name: string;
	position: string;
	description: string;
}

export interface ImageInfoTeam {
	img: WebpImport;
	name: string;
	position: string;
}

export interface ImageInfoAssociated {
	img: WebpImport;
	name: string;
}

export const PromoImages = [
	await import("./assets/concept/arch.webp"),
	await import("./assets/concept/disco-green.webp"),
	await import("./assets/concept/koi-fish.webp"),
	await import("./assets/concept/veu-env-full-island.webp"),
	await import("./assets/concept/pavilion-guy-looking-up.webp"),
	await import("./assets/concept/looking-up-dome.webp"),
	await import("./assets/concept/dome-discovery-fish.webp"),
	await import("./assets/concept/light-dj.webp"),
	await import("./assets/concept/green-jacket-guy.webp")
] as const;

export const VRChatImages = [
	await import("./assets/vrchat/epic-solo-photo.webp"),
	await import("./assets/vrchat/solo-into-the-future.webp"),
	await import("./assets/vrchat/person-wave.webp"),
	await import("./assets/vrchat/praise-the-sun.webp"),
	await import("./assets/vrchat/bye.webp"),
	await import("./assets/vrchat/court-and-many-cats.webp"),
	await import("./assets/vrchat/group-photo.webp"),
	await import("./assets/vrchat/piano-solo.webp"),
	await import("./assets/vrchat/bat-person.webp"),
	await import("./assets/vrchat/singing.webp"),
	await import("./assets/vrchat/vrchat-event.webp"),
	await import("./assets/vrchat/hehe-face-cover.webp")
] as const;

export const ExecutiveImages: Array<ImageInfoExecutive> = [
	{
		img: await import("./assets/profiles/matthew-profile.webp"),
		name: "Matthew Brewbaker",
		position: "Co-Founder, CEO",
		description:
			"Matthew Brewbaker melds his film production savvy with a mastery of gaming and software workflows, steering the company towards groundbreaking VR experiences."
	},
	{
		img: await import("./assets/profiles/raphael-profile.webp"),
		name: "Raphael Arkera",
		position: "Co-Founder, CCO",
		description:
			"Raphael Arkera leverages his creative direction prowess, honed with giants like Marvel, Netflix, and Imaginarium Studios, to infuse VEU Inc. with innovative VR event concepts."
	},
	{
		img: await import("./assets/profiles/nuno-profile.webp"),
		name: "Nuno Rivotti",
		position: "Co-Founder, CPO",
		description:
			"Nuno Rivotti blends insights from film, games, and blockchain, enriching VEU's product strategy with experience from founding the Trojan Horse Was a Unicorn convention."
	}
] as const;

export const TeamImages: Array<ImageInfoTeam> = [
	{
		img: await import("./assets/team/m-heilemann.webp"),
		name: "Michael Heilemann",
		position: "CTO"
	},
	{
		img: await import("./assets/team/william-garcia.webp"),
		name: "William Garcia",
		position: "COO"
	},
	{
		img: await import("./assets/team/m-depiro.webp"),
		name: "Michael Depiro",
		position: "CMO"
	},
	{
		img: await import("./assets/team/logan-desseyn.webp"),
		name: "Logan Desseyn",
		position: "Principal Software Engineer"
	},
	{
		img: await import("./assets/team/bryce.webp"),
		name: "Bryce Dichristofalo",
		position: "XR Director"
	},
	{
		img: await import("./assets/team/eva-petitot.webp"),
		name: "Eva Petitot",
		position: "Lead Unity Environment Artist"
	},
	{
		img: await import("./assets/team/m-reed.webp"),
		name: "Michael Reed",
		position: "Principal 3D Modeler"
	},
	{
		img: await import("./assets/team/neil-blakemore.webp"),
		name: "Neil Blakemore",
		position: "Ethics Director"
	},
	{
		img: await import("./assets/team/jonah-keel.webp"),
		name: "Jonah Keel",
		position: "Publicity"
	},
	{
		img: await import("./assets/team/gopal.webp"),
		name: "Gopal Metro",
		position: "R&D Manager"
	},
	{
		img: await import("./assets/team/gc.webp"),
		name: "Giorgi Chitidze",
		position: "Lead Unreal Environment Artist"
	},
	{
		img: await import("./assets/team/gk.webp"),
		name: "Giorgi Koridze",
		position: "Lead Unreal Technical Artist"
	}
] as const;

export const AssociatedImages: Array<ImageInfoAssociated> = [
	{
		img: await import("./assets/associate/joseph-napoli.webp"),
		name: "Joseph Napoli"
	},
	{
		img: await import("./assets/associate/adam-jones.webp"),
		name: "Adam Jones"
	},
	{
		img: await import("./assets/associate/tai-le.webp"),
		name: "Tai Le"
	},
	{
		img: await import("./assets/associate/oliver-b.webp"),
		name: "Oliver Beck"
	},
	{
		img: await import("./assets/associate/todd-casey.webp"),
		name: "Todd Casey"
	},
	{
		img: await import("./assets/associate/reth-sogan.webp"),
		name: "Reth Sogen"
	},
	{
		img: await import("./assets/associate/virtualilly.webp"),
		name: "Virtualily"
	},
	{
		img: await import("./assets/associate/shopow.webp"),
		name: "Shopow"
	},
	{
		img: await import("./assets/associate/hash-studios.webp"),
		name: "Hash Studios"
	}
] as const;
