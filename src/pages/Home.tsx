import { BiBrush } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import ScrollIndicator from "../components/ScrollIndicator";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Home() {
	return (
		<div className="flex min-h-screen justify-center bg-neutral-900 px-6">
			<div className="relative mb-[20vh] h-full max-w-4xl">
				<div className="prose prose-lg prose-invert max-w-none text-neutral-200">
					<div className="absolute w-full">
						<Navbar />
					</div>
					<div className="flex h-[100vh] flex-col justify-center">
						<Hero />
						<ScrollIndicator className="absolute top-[75vh] self-center" />
					</div>
					<Header text="About" id="about" />
					<ReactMarkdown>
						My name is Lucas Oelker and I’m a software developer currently studying Visual Computing and
						Design in Lippstadt, Germany. Programming, rendering, or web design — if it requires a computer
						and some creative thinking I’m interested!
					</ReactMarkdown>
					<ReactMarkdown>
						I have a deep passion for programming and I like solving problems. I first started learning Java
						and the basics of web development in high school. Today I’m studying Visual Computing and
						Design, which allows me to think about the integrated approach to the conception and development
						of technical systems as well as their conceptual and design perspective.
					</ReactMarkdown>
					<Header text="Project Timeline" id="projects" />
					<Timeline unixBegin={1619820000} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<Project
								title="Das Rezeptbuch"
								link="https://github.com/LucasOe/das-rezeptbuch"
								stack={["Java", "JavaFX", "MySQL"]}
								arrowPosition={0}
							>
								*Das Rezeptbuch* is a digital cookbook. The application provides an interface built in
								JavaFX that lets you view recipes stored in a database. This project was created in a
								team effort for the university module *Computer Science*.
							</Project>
							<Project
								title="Releaf"
								link="https://github.com/LucasOe/releaf"
								stack={["HTML", "SASS", "JavaScript", "PHP", "MySQL"]}
								arrowPosition={50}
							>
								*Releaf* is a website and brand identity for an online shop selling tea for relaxation
								and health. The project was created in a team effort for the university module *Web- and
								Corporate Design* on the topic of health.
							</Project>
							<Project
								title="Marble Physics Simulation"
								link="https://github.com/LucasOe/marble-simulation"
								stack={["Java"]}
								arrowPosition={50}
							>
								A 2D Physics simulation, created for the university module *Visual Computing*. The model
								simulates a 2D marble run with physically accurate calculations for gravity, friction,
								collisions, and a pendulum.
							</Project>
							<Project
								title="Portfolio"
								link="https://github.com/LucasOe/portfolio"
								stack={["Vite", "React", "Tailwind CSS", "TypeScript"]}
								arrowPosition={50}
							>
								You’re looking at it right now. After building multiple websites using HTML, CSS, and
								PHP, this project was my first deep dive into the world of modern web development, using
								a tech stack including Vite, Typescript, React, and Tailwind CSS.
							</Project>
							<Project
								title="Tabletop Simulator API"
								link="https://github.com/LucasOe/tts-external-api"
								stack={["Rust"]}
								arrowPosition={100}
							>
								A Rust API for interacting with the game Tabletop Simulator using TCP messages. I
								created this project as an opportunity to learn more about Rust and API design.
							</Project>
						</div>
					</Timeline>
					<Header text="Skills" id="skills" />
					<div className="grid gap-3 sm:grid-cols-2">
						<Skills title="Software Development" icon={<FiMonitor />}>
							I have five years of academic education in **Java** and I’m currently learning **Rust**. I
							also have experience in game development using **Unity** and **C#**.
						</Skills>
						<Skills title="Frontend Development" icon={<FaReact />}>
							I am proficient in web development using **HTML**, **CSS**, and **PHP**. Currently, I’m
							learning to use modern frameworks like **React** and **Tailwind CSS**.
						</Skills>
						<Skills title="Design" icon={<BiBrush />}>
							The university degree I’m pursuing doesn’t just cover Computer Science but also Design and
							User Experience! I have worked with **Adobe XD** and **Figma** in the past.
						</Skills>
						<Skills title="Cooperation" icon={<BsPeople />}>
							I have worked in groups on many projects for school and university. In my free time I like
							to work on Open Source projects on Github.
						</Skills>
					</div>
					<Header text="Contact" id="contact" />
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
