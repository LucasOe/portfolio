import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Social from "./components/Social";

export default function App() {
	return (
		<div className="center">
			<div className="main">
				<h1 className="header">Hey!</h1>
				<p className="text">
					My name is Lucas Oelker and I&apos;m currently studying Visual Computing and Design in Lippstadt, Germany.
					Programming, rendering or web design — if it requires a computer and some creative thinking I&apos;m
					interested!
				</p>
				<p className="text">
					This is supposed to be a portfolio at some point in the future, but right now it&apos;s still in development.
					Why don&apos;t you check out my socials down below in the meantime?
				</p>
				<div className="socials">
					<Social icon={faTwitter} link="https://twitter.com/_LucasOe_" newtab />
					<Social icon={faGithub} link="https://github.com/LucasOe" newtab />
					<Social icon={faEnvelope} link="mailto:lucas.oelker@gmx.de" />
				</div>
			</div>
		</div>
	);
}
