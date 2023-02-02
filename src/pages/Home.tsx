import { BiBrush } from "react-icons/bi";
import { BsArrowDownShort, BsPeople } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "../components/ContactForm";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Home() {
	return (
		<div className="flex min-h-screen justify-center bg-neutral-900 px-6">
			<div className="mb-[20vh] h-full max-w-4xl">
				<div className="prose-lg prose prose-invert max-w-none text-neutral-200">
					<div className="flex h-[100vh] flex-col justify-center">
						<h1 className="m-0 text-[7vw] leading-normal md:text-[4rem] lg:text-[5rem]">
							Hey, I&apos;m Lucas Oelker.
						</h1>
						<div className="flex text-[7vw] leading-normal md:text-[4rem] lg:text-[5rem]">
							<span>I&apos;m a&nbsp;</span>
							<TypeAnimation
								sequence={[
									"programmer.",
									2000,
									"designer.",
									2000,
									"nerd.",
									2000,
									"perfectionist.",
									2000,
									"student.",
									2000,
								]}
								wrapper="div"
								cursor={true}
								repeat={Infinity}
								speed={1}
								deletionSpeed={20}
								className="text-green-400 after:text-white"
							/>
						</div>
						<a
							href="#about"
							className="absolute top-[75vh] animate-bounce self-center rounded-full bg-white opacity-50 hover:opacity-75"
						>
							<BsArrowDownShort className="h-12 w-12 text-neutral-800" />
						</a>
					</div>
					<h2 id="about" className="mt-24 scroll-m-[12vh] font-mono">
						# About
					</h2>
					<p className="sm:pr-6">
						My name is Lucas Oelker and I&apos;m a software developer currently studying Visual Computing
						and Design in Lippstadt, Germany. Programming, rendering, or web design — if it requires a
						computer and some creative thinking I&apos;m interested!
					</p>
					<p className="sm:pr-6">
						I have a deep passion for programming and I like solving problems. I first started learning Java
						and the basics of web development in high school. Today I&apos;m studying Visual Computing and
						Design, which allows me to think about the integrated approach to the conception and development
						of technical systems as well as their conceptual and design perspective.
					</p>
					<h2 id="projects" className="mt-24 scroll-m-[12vh] font-mono">
						# Project Timeline
					</h2>
					<Timeline unixBegin={1619820000} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<Project
								title="Das Rezeptbuch"
								link="https://github.com/LucasOe/das-rezeptbuch"
								stack={["Java", "MySQL"]}
								arrowPosition={0}
							>
								<i>Das Rezeptbuch</i> is a digital cookbook. The application provides an interface built
								in JavaFX that lets you view recipes stored in a database. This project was created in a
								team effort for the university module <i>Computer Science</i>.
							</Project>
							<Project
								title="Releaf"
								link="https://github.com/LucasOe/releaf"
								stack={["HTML", "SASS", "JavaScript", "PHP", "MySQL"]}
								arrowPosition={50}
							>
								<i>Releaf</i> is a website and brand identity for an online tea shop. The project was
								created in a team effort for the university module <i>Web- and Corporate Design</i> on
								the topic of {'"Health"'}.
							</Project>
							<Project
								title="Marble Physics Simulation"
								link="https://github.com/LucasOe/marble-simulation"
								stack={["Java"]}
								arrowPosition={50}
							>
								A 2D Physics simulation, created for the university module <i>Visual Computing</i>. The
								model simulates a 2D marble run with physically accurate calculations for gravity,
								friction, collisions, and a pendulum.
							</Project>
							<Project
								title="Portfolio"
								link="https://github.com/LucasOe/portfolio"
								stack={["Vite", "React", "Tailwind CSS", "TypeScript"]}
								arrowPosition={50}
							>
								You&apos;re looking at it right now. After building multiple websites using HTML, CSS,
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
					<h2 id="skills" className="mt-24 scroll-m-[12vh] font-mono">
						# Skills
					</h2>
					<div className="grid gap-3 sm:grid-cols-2">
						<Skills title="Software Development" icon={<FiMonitor />}>
							I have five years of academic education in <b>Java</b> and I&apos;m currently learning{" "}
							<b>Rust</b>. I also have experience in game development using <b>Unity</b> and <b>C#</b>.
						</Skills>
						<Skills title="Frontend Development" icon={<FaReact />}>
							I am proficient in web development using <b>HTML</b>, <b>CSS</b>, and <b>PHP</b>. Currently,
							I&apos;m learning to use modern frameworks like <b>React</b> and <b>Tailwind CSS</b>.
						</Skills>
						<Skills title="Design" icon={<BiBrush />}>
							The university degree I&apos;m pursuing doesn&apos;t just cover Computer Science but also
							Design and User Experience! I have worked with <b>Adobe XD</b> and <b>Figma</b> in the past.
						</Skills>
						<Skills title="Cooperation" icon={<BsPeople />}>
							I have worked in groups on many projects for school and university. I like to work on Open
							Source projects on Github in my free time.
						</Skills>
					</div>
					<h2 id="contact" className="mt-24 scroll-m-[12vh] font-mono">
						# Contact
					</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
