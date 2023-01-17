import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
					<h2 className="mt-24 font-mono">Projects</h2>
					<Timeline unixBegin={1483225200} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<Project title="Project 1" arrowPosition={0} />
							<Project title="Project 2" arrowPosition={50} />
							<Project title="Project 3" arrowPosition={50} />
							<Project title="Project 4" arrowPosition={100} />
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
