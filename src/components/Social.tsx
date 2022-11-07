import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialProps = {
	icon: IconDefinition;
	link: string;
	newtab?: boolean;
};

export default function Social({ icon, link, newtab }: SocialProps) {
	return (
		<div className="h-10 w-10 rounded-full bg-neutral-200 p-2 opacity-80 hover:opacity-100">
			<a href={link} target={newtab ? "_blank" : "_self"} rel="noreferrer">
				<FontAwesomeIcon icon={icon} className="h-full w-full text-neutral-900" />
			</a>
		</div>
	);
}
