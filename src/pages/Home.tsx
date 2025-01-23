import dedent from "dedent";
import Markdown from "react-markdown";

import { BiBrush } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaGithub, FaReact, FaYoutube } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import Skill from "@/components/Skill";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
	return (
		<main className="pb-80">
			<div className="flex h-screen flex-col justify-center">
				<Hero />
				<ScrollIndicator offset={16} className="absolute top-[75vh] self-center" />
			</div>
			<Header text="About" id="about" />
			<Markdown className="prose prose-lg max-w-none">
				{dedent`
					My name is Lucas Oelker and I’m a software developer currently studying Visual Computing and
					Design in Lippstadt, Germany. Programming, rendering, or web design — if it requires a
					computer and some creative thinking I’m interested!
					
					I have a deep passion for programming and I like solving problems. I first started learning
					Java and the basics of web development in high school. Today I’m studying Visual Computing
					and Design, which allows me to think about the integrated approach to the conception and
					development of technical systems as well as their conceptual and design perspective.
				`}
			</Markdown>
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
										icon: <FaGithub />,
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
										icon: <FaGithub />,
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
										icon: <FaGithub />,
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
										icon: <FaGithub />,
										label: "Open on Github",
									},
								],
								stack: ["SvelteKit", "Supabase", "TailwindCSS", "TypeScript"],
								time: 1707001200,
								arrowPosition: 100,
								description: dedent`
									*Dishcovery* is a web app made for discovering new recipes with a Tinder-like swiping
									experience. It was built using SvelteKit, Supabase and TailwindCSS. *Dishcovery* was created
									as a team effort for the university module Advanced Web Development.
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
										icon: <FaGithub />,
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
										icon: <FaGithub />,
										label: "Open on Github",
									},
									{
										to: "https://www.youtube.com/watch?v=l9ik5Rarx8o",
										icon: <FaYoutube />,
										label: "Open on YouTube",
									},
								],
								stack: ["Unity", "C#"],
								time: 1688205600,
								arrowPosition: 100,
								description: dedent`
									In *Spellbound Sprouts* you play as a witch on her farm, defending crops from waves
									of monsters that appear at night. The game is a combination of tower defense
									and farming game, made in Unity.
								`,
							},
						],
					},
				]}
			/>
			<Header text="Skills" id="skills" />
			<div className="grid gap-3 sm:grid-cols-2">
				<Skill title="Software Development" icon={<FiMonitor />}>
					{dedent`
						I have five years of academic education in **Java** and I’m currently learning **Rust**.
						I also have experience in game development using **Unity** and **C#**.
					`}
				</Skill>
				<Skill title="Frontend Development" icon={<FaReact />}>
					{dedent`
						I am proficient in web development using **HTML**, **CSS**, and **PHP**. Currently, I’m
						learning to use modern frameworks like **React** and **Tailwind CSS**.
					`}
				</Skill>
				<Skill title="Design" icon={<BiBrush />}>
					{dedent`
						The university degree I’m pursuing doesn’t just cover Computer Science but also Design
						and User Experience! I have worked with **Adobe XD** and **Figma** in the past.
					`}
				</Skill>
				<Skill title="Cooperation" icon={<BsPeople />}>
					{dedent`
						I have worked in groups on many projects for school and university. In my free time I
						like to work on Open Source projects on Github.
					`}
				</Skill>
			</div>
			<Header text="Contact" id="contact" />
			<Contact />
		</main>
	);
}
