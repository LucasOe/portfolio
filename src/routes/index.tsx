import { faGithub, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faPaintBrush, faServer } from "@fortawesome/free-solid-svg-icons";
import { createFileRoute } from "@tanstack/react-router";
import dedent from "dedent";
import Markdown from "react-markdown";

import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import Skill from "@/components/Skill";
import Timeline from "@/components/Timeline/Timeline";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<main className="pb-80">
			<div className="flex h-screen flex-col justify-center">
				<Hero />
				<ScrollIndicator offset={16} className="absolute top-[75vh] self-center" />
			</div>
			<Header text="About" id="about" />
			<div className="prose prose-lg max-w-none">
				<Markdown>
					{dedent`
						My name is Lucas Oelker and I’m a software developer currently studying Visual Computing and
						Design in Lippstadt, Germany. Programming, rendering, or web design — if it requires a
						computer and some creative thinking I’m interested!
						
						I have a deep passion for programming and I like solving problems. I first started learning
						Java and the basics of web development in high school. Today I’m studying Visual Computing
						and Design, which allows me to think about the integrated approach to the conception and
						development of technical systems as well as their conceptual and design perspective.
						
						Between June and September 2024, I completed an internship at the [Painless Developments GmbH](https://www.paindevs.com/)
						in Berlin, where I worked as a Gameplay Programmer and Backend Developer. 
					`}
				</Markdown>
			</div>
			<Header text="Projects" id="projects" />
			<Timeline
				data={[
					{
						name: "Web Development",
						projects: [
							{
								title: "Das Rezeptbuch",
								links: [
									{
										to: "https://github.com/LucasOe/das-rezeptbuch",
										icon: faGithub,
										label: "Open on Github",
									},
								],
								stack: ["Java", "JavaFX", "MySQL"],
								time: 1619820000,
								arrowPosition: 0,
								description: dedent`
									*Das Rezeptbuch* is a digital cookbook. The application provides an interface built in
									JavaFX that allows you to view recipes stored in a database. This project was developed as a
									team effort for the university module *Informatics*.
								`,
							},
							{
								title: "Releaf",
								links: [
									{
										to: "https://github.com/LucasOe/releaf",
										icon: faGithub,
										label: "Open on Github",
									},
								],
								stack: ["HTML", "SASS", "JavaScript", "PHP", "MySQL"],
								time: 1635721200,
								arrowPosition: 50,
								description: dedent`
									*Releaf* is a website and brand identity for an online shop that sells tea for relaxation
									and health. The project was created as a team effort for the university module *Web- and
									Corporate Design* on the topic of health.
								`,
							},
							{
								title: "Portfolio",
								links: [
									{
										to: "https://github.com/LucasOe/portfolio",
										icon: faGithub,
										label: "Open on Github",
									},
								],
								stack: ["Vite", "React", "TailwindCSS", "TypeScript"],
								time: 1659304800,
								arrowPosition: 50,
								description: dedent`
									You’re looking at it right now. After building several websites using HTML, CSS, and
									PHP, this project was my first deep dive into the world of modern web development,
									using a tech stack including Vite, Typescript, React, and Tailwind CSS.
								`,
							},
							{
								title: "Dishcovery",
								links: [
									{
										to: "https://github.com/LucasOe/dishcovery",
										icon: faGithub,
										label: "Open on Github",
									},
								],
								stack: ["SvelteKit", "Supabase", "TailwindCSS", "TypeScript"],
								time: 1707001200,
								arrowPosition: 50,
								description: dedent`
									*Dishcovery* is a web app made for discovering new recipes with a Tinder-like swiping
									experience. It was built using SvelteKit, Supabase and TailwindCSS. *Dishcovery* was created
									as a team effort for the university module Advanced Web Development.
								`,
							},
							{
								title: "Leaderboard Backend & Dashboard",
								stack: ["Rust", "Actix Web", "React", "Vite", "shadcn/ui", "PostgreSQL"],
								time: 1727733600,
								arrowPosition: 100,
								description: dedent`
									During my internship at *Painless Developments*, I developed the backend and management
									dashboard for the leaderboard of a mobile puzzle game.  
									I built a scalable RESTful API using Rust and Actix Web to enable secure and efficient
									CRUD operations, with authentication managed through JSON Web Tokens. The React dashboard
									provides administrators with an intuitive interface for seamlessly managing leaderboard data.
								`,
							},
						],
					},
					{
						name: "Game Development",
						projects: [
							{
								title: "Marble Physics Simulation",
								links: [
									{
										to: "https://github.com/LucasOe/marble-simulation",
										icon: faGithub,
										label: "Open on Github",
									},
								],
								stack: ["Java"],
								time: 1646089200,
								arrowPosition: 0,
								description: dedent`
									A 2D physics simulation, created for the university module *Visual Computing*.  
									The model simulates a 2D marble run with physically accurate calculations for gravity,
									friction, collisions, and a pendulum.
								`,
							},
							{
								title: "Spellbound Sprouts",
								links: [
									{
										to: "https://github.com/LucasOe/spellbound-sprouts",
										icon: faGithub,
										label: "Open on Github",
									},
									{
										to: "https://www.youtube.com/watch?v=l9ik5Rarx8o",
										icon: faYoutube,
										label: "Open on YouTube",
									},
								],
								stack: ["Unity", "C#"],
								time: 1688205600,
								arrowPosition: 50,
								description: dedent`
									In *Spellbound Sprouts* you play as a witch on her farm, defending crops from waves
									of monsters that appear at night. The game is a combination of tower defense
									and farming game, made in Unity.
								`,
							},
							{
								title: "Mobile Puzzle Game",
								stack: ["Unity", "C#"],
								time: 1727733600,
								arrowPosition: 100,
								description: dedent`
									During my internship at *Painless Developments*, I worked on an upcoming mobile puzzle game,
									contributing to gameplay programming, UI/UX design, and bug fixing. I implemented new features,
									refined mechanics, and improved the user experience. Collaborating closely with the team,
									I gained valuable insight into professional game development workflows.
								`,
							},
						],
					},
				]}
			/>
			<Header text="Skills" id="skills" />
			<div className="grid gap-3 sm:grid-cols-2">
				<Skill title="Software Development" icon={faDesktop}>
					{dedent`
						I have five years of academic experience with **Java** and currently focus on systems programming in **Rust**.
						I also have practical experience in game development using **Unity** and **C#**.
					`}
				</Skill>
				<Skill title="Frontend Development" icon={faReact}>
					{dedent`
						I work with modern frameworks like **React** and **SvelteKit**, as well as vanilla **JavaScript**/**TypeScript**.
						I build accessible, responsive interfaces using **TailwindCSS** and libraries like **shadcn/ui** and **Radix**.
					`}
				</Skill>
				<Skill title="Backend Development" icon={faServer}>
					{dedent`
						I’ve developed a RESTful API in **Rust** with **Actix Web**, integrating **JWT** authentication and **PostgreSQL**.
						I also have experience with **Supabase** and **PHP** for server-side logic in web projects.
					`}
				</Skill>
				<Skill title="Design" icon={faPaintBrush}>
					{dedent`
						My degree combines Computer Science with **Design** and **User Experience**.
						I have experience prototyping and designing interfaces in **Figma** and **Adobe XD**,
						with an emphasis on usability and accessibility.
					`}
				</Skill>
			</div>
			<Header text="Contact" id="contact" />
			<Contact />
		</main>
	);
}
