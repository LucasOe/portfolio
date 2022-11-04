import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
					<a href="http://twitter.com/_LucasOe_" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faTwitter} className="icon" />
					</a>
					<a href="http://github.com/LucasOe" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="icon" />
					</a>
				</div>
			</div>
		</div>
	);
}
