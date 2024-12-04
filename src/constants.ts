import ArchWebp from "./assets/concept/arch.webp";
import DiscoGreenWebp from "./assets/concept/disco-green.webp";
import KoiFishWebp from "./assets/concept/koi-fish.webp";
import VeuEnvironmentFullIslandWebp from "./assets/concept/veu-env-full-island.webp";
import PavilionGuyLookingUpWebp from "./assets/concept/pavilion-guy-looking-up.webp";
import LookingUpDomeWebp from "./assets/concept/looking-up-dome.webp";
import DomeDiscoveryFishWebp from "./assets/concept/dome-discovery-fish.webp";
import LightDjWebp from "./assets/concept/light-dj.webp";
import GreenJacketGuyWebp from "./assets/concept/green-jacket-guy.webp";
import EpicSoloPhotoWebp from "./assets/vrchat/epic-solo-photo.webp";
import SoloIntoTheFutureWebp from "./assets/vrchat/solo-into-the-future.webp";
import PersonWaveWebp from "./assets/vrchat/person-wave.webp";
import PraiseTheSunWebp from "./assets/vrchat/praise-the-sun.webp";
import ByeWebp from "./assets/vrchat/bye.webp";
import CourtAndManyCatsWebp from "./assets/vrchat/court-and-many-cats.webp";
import GroupPhotoWebp from "./assets/vrchat/group-photo.webp";
import PianoSoloWebp from "./assets/vrchat/piano-solo.webp";
import BatPersonWebp from "./assets/vrchat/bat-person.webp";
import SingingWebp from "./assets/vrchat/singing.webp";
import VrchatEventWebp from "./assets/vrchat/vrchat-event.webp";
import HeheFaceCoverWebp from "./assets/vrchat/hehe-face-cover.webp";
import MatthewProfileWebp from "./assets/profiles/matthew-profile.webp";
import RaphaelProfileWebp from "./assets/profiles/raphael-profile.webp";
import NunoProfileWebp from "./assets/profiles/nuno-profile.webp";
import MichaelHeilemannWebp from "./assets/team/m-heilemann.webp";
import WilliamGarciaWebp from "./assets/team/william-garcia.webp";
import MichaelDepiroWebp from "./assets/team/m-depiro.webp";
import LoganDesseynWebp from "./assets/team/logan-desseyn.webp";
import BryceWebp from "./assets/team/bryce.webp";
import EvaPetitotWebp from "./assets/team/eva-petitot.webp";
import MichaelReedWebp from "./assets/team/m-reed.webp";
import NeilBlakemoreWebp from "./assets/team/neil-blakemore.webp";
import JonahKeelWebp from "./assets/team/jonah-keel.webp";
import GopalMetroWebp from "./assets/team/gopal.webp";
import GiorgiChitidzeWebp from "./assets/team/gc.webp";
import GiorgiKoridzeWebp from "./assets/team/gk.webp";
import JosephNapoliWebp from "./assets/associate/joseph-napoli.webp";
import AdamJonesWebp from "./assets/associate/adam-jones.webp";
import TaiLeWebp from "./assets/associate/tai-le.webp";
import OliverBeckWebp from "./assets/associate/oliver-b.webp";
import ToddCaseyWebp from "./assets/associate/todd-casey.webp";
import RethSoganWebp from "./assets/associate/reth-sogan.webp";
import VirtualillyWebp from "./assets/associate/virtualilly.webp";
import ShopowWebp from "./assets/associate/shopow.webp";
import HashStudiosWebp from "./assets/associate/hash-studios.webp";
import CamTemporaryWebp from "./assets/associate/cam-optimized.webp";

export interface ImageInfoExecutive {
	img: string;
	name: string;
	position: string;
	description: string;
}

export interface ImageInfoTeam {
	img: string;
	name: string;
	position: string;
}

export interface ImageInfoAssociated {
	img: string;
	name: string;
}

export const PromoImages = [
	ArchWebp,
	DiscoGreenWebp,
	KoiFishWebp,
	VeuEnvironmentFullIslandWebp,
	PavilionGuyLookingUpWebp,
	LookingUpDomeWebp,
	DomeDiscoveryFishWebp,
	LightDjWebp,
	GreenJacketGuyWebp
] as const;

export const VRChatImages = [
	EpicSoloPhotoWebp,
	SoloIntoTheFutureWebp,
	PersonWaveWebp,
	PraiseTheSunWebp,
	ByeWebp,
	CourtAndManyCatsWebp,
	GroupPhotoWebp,
	PianoSoloWebp,
	BatPersonWebp,
	SingingWebp,
	VrchatEventWebp,
	HeheFaceCoverWebp
] as const;

export const ExecutiveImages: Array<ImageInfoExecutive> = [
	{
		img: MatthewProfileWebp,
		name: "Matthew Brewbaker",
		position: "Co-Founder, CEO",
		description:
			"Matthew Brewbaker melds his film production savvy with a mastery of gaming and software workflows, steering the company towards groundbreaking VR experiences."
	},
	{
		img: RaphaelProfileWebp,
		name: "Raphael Arkera",
		position: "Co-Founder, CCO",
		description:
			"Raphael Arkera leverages his creative direction prowess, honed with giants like Marvel, Netflix, and Imaginarium Studios, to infuse VEU Inc. with innovative VR event concepts."
	},
	{
		img: NunoProfileWebp,
		name: "Nuno Rivotti",
		position: "Co-Founder, CPO",
		description:
			"Nuno Rivotti blends insights from film, games, and blockchain, enriching VEU's product strategy with experience from founding the Trojan Horse Was a Unicorn convention."
	}
] as const;

export const TeamImages: Array<ImageInfoTeam> = [
	{
		img: MichaelHeilemannWebp,
		name: "Michael Heilemann",
		position: "CTO"
	},
	{
		img: WilliamGarciaWebp,
		name: "William Garcia",
		position: "COO"
	},
	{
		img: MichaelDepiroWebp,
		name: "Michael Depiro",
		position: "CMO"
	},
	{
		img: LoganDesseynWebp,
		name: "Logan Desseyn",
		position: "Principal Software Engineer"
	},
	{
		img: BryceWebp,
		name: "Bryce Dichristofalo",
		position: "XR Director"
	},
	{
		img: EvaPetitotWebp,
		name: "Eva Petitot",
		position: "Lead Unity Environment Artist"
	},
	{
		img: MichaelReedWebp,
		name: "Michael Reed",
		position: "Principal 3D Modeler"
	},
	{
		img: NeilBlakemoreWebp,
		name: "Neil Blakemore",
		position: "Ethics Director"
	},
	{
		img: JonahKeelWebp,
		name: "Jonah Keel",
		position: "Publicity"
	},
	{
		img: GopalMetroWebp,
		name: "Gopal Metro",
		position: "R&D Manager"
	},
	{
		img: GiorgiChitidzeWebp,
		name: "Giorgi Chitidze",
		position: "Lead Unreal Environment Artist"
	},
	{
		img: GiorgiKoridzeWebp,
		name: "Giorgi Koridze",
		position: "Lead Unreal Technical Artist"
	}
] as const;

export const AssociatedImages: Array<ImageInfoAssociated> = [
	{
		img: JosephNapoliWebp,
		name: "Joseph Napoli"
	},
	{
		img: AdamJonesWebp,
		name: "Adam Jones"
	},
	{
		img: TaiLeWebp,
		name: "Tai Le"
	},
	{
		img: OliverBeckWebp,
		name: "Oliver Beck"
	},
	{
		img: ToddCaseyWebp,
		name: "Todd Casey"
	},
	{
		img: CamTemporaryWebp,
		name: "Cameron Belo"
	},
	{
		img: RethSoganWebp,
		name: "Reth Sogen"
	},
	{
		img: VirtualillyWebp,
		name: "Virtualily"
	},
	{
		img: ShopowWebp,
		name: "Shopow"
	},
	{
		img: HashStudiosWebp,
		name: "Hash Studios"
	}
] as const;

export const ApiBaseURL = new URL("https://collections.enterverse.com");
export const ApiEndpoint = (path: string) =>
	new URL(path, ApiBaseURL).toString();
