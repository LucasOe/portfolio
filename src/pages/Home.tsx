import {
	faGithub,
	faHtml5,
	faJava,
	faPhp,
	faReact,
	faRust,
	faSass,
	faSquareJs,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
						My name is Lucas Oelker and I&apos;m a software developer currently studying Visual Computing
						and Design in Lippstadt, Germany. Programming, rendering or web design — if it requires a
						computer and some creative thinking I&apos;m interested!
					</p>
					<p>
						I have a deep passion for programming and I like solving problems. I first started learning Java
						and the basics of web development in high school. Today I&apos;m studying Visual Computing and
						Design, which allows me to think about the integrated approach to the conception and development
						of technical systems as well as their conceptual and design perspective.
					</p>
					<div className="mt-6 flex gap-3">
						<Social icon={faTwitter} link="https://twitter.com/_LucasOe_" newtab />
						<Social icon={faGithub} link="https://github.com/LucasOe" newtab />
						<Social icon={faEnvelope} link="mailto:lucas.oelker@gmx.de" />
					</div>
					<h2 className="mt-24 font-mono">Project Timeline</h2>
					<Timeline unixBegin={1619820000} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<Project
								title="Das Rezeptbuch"
								link="https://github.com/LucasOe/das-rezeptbuch"
								stack={[faJava, faDatabase]}
								arrowPosition={0}
							>
								<i>Das Rezeptbuch</i> is a digital cookbook. The application provides an interface built
								in JavaFX that lets you view recipies stored in a database. This project was created in
								a team effort for the university module <i>Computer Science</i>.
							</Project>
							<Project
								title="Releaf"
								link="https://github.com/LucasOe/releaf"
								stack={[faHtml5, faSass, faSquareJs, faPhp, faDatabase]}
								arrowPosition={50}
							>
								<i>Releaf</i> is a website and brand identity for an online tea shop. The project was
								created in a team effort for the university module <i>Web- and Coroprate Design</i> on
								the topic of {'"Health"'}.
							</Project>
							<Project
								title="Marble Physics Simulation"
								link="https://github.com/LucasOe/marble-simulation"
								stack={[faJava]}
								arrowPosition={50}
							>
								A 2D Physics simulation created for the university module <i>Visual Computing</i>. The
								model simulates a 2D marble run with physically accurate calculations for gravity,
								friction, collisions and a pendulum.
							</Project>
							<Project
								title="Portfolio"
								link="https://github.com/LucasOe/portfolio"
								stack={[faReact]}
								arrowPosition={50}
							>
								You&apos;re looking at it right now. After building multiple websites using HTML, CSS
								and PHP only, this project was my first deep dive into the world of modern web
								development, using a tech stack including Vite, Typescript, React, and Tailwind CSS.
							</Project>
							<Project
								title="Tabletop Simulator API"
								link="https://github.com/LucasOe/tts-external-api"
								stack={[faRust]}
								arrowPosition={100}
							>
								A Rust API for interacting with the game Tabletop Simulator using TCP messages. <br /> I
								created this project as an opportunity to learn more about Rust and API design.
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
