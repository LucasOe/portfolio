import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialProps = {
	icon: IconDefinition;
	link: string;
	newtab?: boolean;
};

export default function Social({ icon, link, newtab }: SocialProps) {
	return (
		<div className="w-10 h-10 p-2 rounded-full bg-neutral-200 opacity-80 hover:opacity-100">
			<a href={link} target={newtab ? "_blank" : "_self"} rel="noreferrer">
				<FontAwesomeIcon icon={icon} className="w-full h-full text-neutral-900" />
			</a>
		</div>
	);
}
