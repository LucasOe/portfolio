import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
						This is supposed to be a portfolio at some point in the future, but right now it&apos;s still in
						development. Why don&apos;t you check out my socials down below in the meantime?
					</p>
					<div className="mt-6 flex gap-3">
						<Social icon={faTwitter} link="https://twitter.com/_LucasOe_" newtab />
						<Social icon={faGithub} link="https://github.com/LucasOe" newtab />
						<Social icon={faEnvelope} link="mailto:lucas.oelker@gmx.de" />
					</div>
					<h2 className="mt-24">Projects</h2>
					<Timeline unixBegin={1483225200} unixEnd={1673910000}>
						<div className="flex grow flex-col gap-3">
							<div className="h-80 rounded-xl bg-slate-400">Project 1</div>
							<div className="h-80 rounded-xl bg-slate-400">Project 2</div>
							<div className="h-80 rounded-xl bg-slate-400">Project 3</div>
						</div>
					</Timeline>
					<div className="h-80" />
					<div className="h-80" />
				</div>
			</div>
		</div>
	);
}
