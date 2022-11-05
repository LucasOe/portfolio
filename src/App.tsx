import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Social from "./components/Social";

export default function App() {
	return (
		<div className="flex justify-center bg-neutral-900 w-screen h-screen">
			<div className="pt-72 max-w-4xl">
				<article className="prose prose-lg prose-invert max-w-none font-serif text-neutral-200">
					<h1 className="italic">Hey!</h1>
					<p>
						My name is Lucas Oelker and I&apos;m currently studying Visual Computing and Design in Lippstadt, Germany.
						Programming, rendering or web design — if it requires a computer and some creative thinking I&apos;m
						interested!
					</p>
					<p>
						This is supposed to be a portfolio at some point in the future, but right now it&apos;s still in
						development. Why don&apos;t you check out my socials down below in the meantime?
					</p>
				</article>
				<div className="flex gap-3 pt-6">
					<Social icon={faTwitter} link="https://twitter.com/_LucasOe_" newtab />
					<Social icon={faGithub} link="https://github.com/LucasOe" newtab />
					<Social icon={faEnvelope} link="mailto:lucas.oelker@gmx.de" />
				</div>
			</div>
		</div>
	);
}
