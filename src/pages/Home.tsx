import { FaReact } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Home() {
	return (
		<div className="flex min-h-screen justify-center bg-neutral-900 p-6">
			<div className="my-10 h-full max-w-4xl sm:my-20 md:my-40">
				<div className="prose-lg prose prose-invert max-w-none text-neutral-200">
					<h1 className="font-serif italic">Hey!</h1>
					<p className="sm:pr-6">
						My name is Lucas Oelker and I&apos;m a software developer currently studying Visual Computing
						and Design in Lippstadt, Germany. Programming, rendering or web design — if it requires a
						computer and some creative thinking I&apos;m interested!
					</p>
					<p className="sm:pr-6">
						I have a deep passion for programming and I like solving problems. I first started learning Java
						and the basics of web development in high school. Today I&apos;m studying Visual Computing and
						Design, which allows me to think about the integrated approach to the conception and development
						of technical systems as well as their conceptual and design perspective.
					</p>
					<h2 className="mt-24 font-mono"># Project Timeline</h2>
					<Timeline unixBegin={1619820000} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<Project
								title="Das Rezeptbuch"
								link="https://github.com/LucasOe/das-rezeptbuch"
								stack={["Java", "MySQL"]}
								arrowPosition={0}
							>
								<i>Das Rezeptbuch</i> is a digital cookbook. The application provides an interface built
								in JavaFX that lets you view recipies stored in a database. This project was created in
								a team effort for the university module <i>Computer Science</i>.
							</Project>
							<Project
								title="Releaf"
								link="https://github.com/LucasOe/releaf"
								stack={["HTML", "SASS", "JavaScript", "PHP", "MySQL"]}
								arrowPosition={50}
							>
								<i>Releaf</i> is a website and brand identity for an online tea shop. The project was
								created in a team effort for the university module <i>Web- and Coroprate Design</i> on
								the topic of {'"Health"'}.
							</Project>
							<Project
								title="Marble Physics Simulation"
								link="https://github.com/LucasOe/marble-simulation"
								stack={["Java"]}
								arrowPosition={50}
							>
								A 2D Physics simulation created for the university module <i>Visual Computing</i>. The
								model simulates a 2D marble run with physically accurate calculations for gravity,
								friction, collisions and a pendulum.
							</Project>
							<Project
								title="Portfolio"
								link="https://github.com/LucasOe/portfolio"
								stack={["Vite", "React", "Tailwind CSS", "TypeScript"]}
								arrowPosition={50}
							>
								You&apos;re looking at it right now. After building multiple websites using HTML, CSS
								and PHP only, this project was my first deep dive into the world of modern web
								development, using a tech stack including Vite, Typescript, React, and Tailwind CSS.
							</Project>
							<Project
								title="Tabletop Simulator API"
								link="https://github.com/LucasOe/tts-external-api"
								stack={["Rust"]}
								arrowPosition={100}
							>
								A Rust API for interacting with the game Tabletop Simulator using TCP messages. <br /> I
								created this project as an opportunity to learn more about Rust and API design.
							</Project>
						</div>
					</Timeline>
					<h2 className="mt-24 font-mono"># Skills</h2>
					<div className="flex flex-col gap-2 sm:flex-row">
						<Skills title="Software Development" icon={<FiMonitor />}>
							I have five years of academic education in Java and I&apos;m currently learning Rust. I also
							have experience in game development using Unity and C#.
						</Skills>
						<Skills title="Frontend Development" icon={<FaReact />}>
							I have experience in Design and web development using HTML, CSS and PHP. Currently I&apos;m
							learning to use modern frameworks like React and Tailwind CSS.
						</Skills>
					</div>
					<h2 className="mt-24 font-mono"># Contact</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
