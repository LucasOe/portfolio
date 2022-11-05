import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/components/social.scss";

type SocialProps = {
	icon: IconDefinition;
	link: string;
	newtab?: boolean;
};

export default function Social({ icon, link, newtab }: SocialProps) {
	return (
		<div className="iconWrapper">
			<a href={link} target={newtab ? "_blank" : "_self"} rel="noreferrer">
				<FontAwesomeIcon icon={icon} className="icon" />
			</a>
		</div>
	);
}
