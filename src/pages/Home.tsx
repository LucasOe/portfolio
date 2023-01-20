import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NewTabLink from "../components/NewTabLink";
import Project from "../components/Project";
import Social from "../components/Social";
import Timeline from "../components/Timeline";

export default function Home() {
	return (
		<div className="flex min-h-screen justify-center bg-neutral-900 p-6">
			<div className="h-full max-w-4xl pt-10 sm:pt-20 md:pt-40">
				<div className="prose-lg prose prose-invert max-w-none text-neutral-200">
					<h1 className="font-serif italic">Hey!</h1>
					<p>
						My name is Lucas Oelker and I&apos;m currently studying Visual Computing and Design in
						Lippstadt, Germany. Programming, rendering or web design — if it requires a computer and some
						creative thinking I&apos;m interested!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ullam, aspernatur modi sequi
						nesciunt, minima earum quam reprehenderit laboriosam delectus excepturi mollitia pariatur!
						Veniam soluta dolore incidunt voluptatem ipsam?
					</p>
					<div className="mt-6 flex gap-3">
						<Social icon={faTwitter} link="https://twitter.com/_LucasOe_" newtab />
						<Social icon={faGithub} link="https://github.com/LucasOe" newtab />
						<Social icon={faEnvelope} link="mailto:lucas.oelker@gmx.de" />
					</div>
					<h2 className="mt-24 font-mono">Project Timeline</h2>
					<Timeline unixBegin={1554069600} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<Project
								title='System.out.println("Hello, World!");'
								arrowPosition={0}
								className="mb-[0px]"
							>
								I first started learning Java in late 2017 to early 2018 in high school. In April 2019 I
								created my
								<NewTabLink link="https://github.com/LucasOe/gameshop" text="first website" />
								as a school project. For a voluntary internship in Ferber-Software GmbH I also created a
								<NewTabLink
									link="https://github.com/LucasOe/streichholzrechner"
									text="Know-how-Computer"
								/>
								with Electron. While the code isn&apos;t great when looking back at it, these projects
								mark the beginning of my programming journey.
							</Project>
							<Project
								title="Das Rezeptbuch"
								link="https://github.com/LucasOe/das-rezeptbuch"
								arrowPosition={50}
								className="mb-[0px]"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam natus est
								necessitatibus nostrum dolorem, odio delectus id optio commodi cum perspiciatis
								inventore dolores incidunt omnis officiis tenetur adipisci voluptatem?
							</Project>
							<Project
								title="Releaf"
								link="https://github.com/LucasOe/releaf"
								arrowPosition={50}
								className="mb-[0px]"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam natus est
								necessitatibus nostrum dolorem, odio delectus id optio commodi cum perspiciatis
								inventore dolores incidunt omnis officiis tenetur adipisci voluptatem?
							</Project>
							<Project
								title="Marble Simulation"
								link="https://github.com/LucasOe/marble-simulation"
								arrowPosition={50}
								className="mb-[0px]"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam natus est
								necessitatibus nostrum dolorem, odio delectus id optio commodi cum perspiciatis
								inventore dolores incidunt omnis officiis tenetur adipisci voluptatem?
							</Project>
							<Project
								title="Tabletop Simulator API"
								link="https://github.com/LucasOe/tts-external-api"
								arrowPosition={100}
								className="mb-[0px]"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam natus est
								necessitatibus nostrum dolorem, odio delectus id optio commodi cum perspiciatis
								inventore dolores incidunt omnis officiis tenetur adipisci voluptatem?
							</Project>
						</div>
					</Timeline>
					<h2 className="mt-24 font-mono">Skills</h2>
					<div className="h-80">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit vero ipsa consectetur
						omnis quaerat distinctio quisquam, dolor iste tempora ratione! Similique incidunt quo mollitia
						nostrum placeat illo repellat cum!
					</div>
					<h2 className="mt-24 font-mono">Contact</h2>
					<div className="h-80">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit vero ipsa consectetur
						omnis quaerat distinctio quisquam, dolor iste tempora ratione! Similique incidunt quo mollitia
						nostrum placeat illo repellat cum!
					</div>
				</div>
			</div>
		</div>
	);
}
