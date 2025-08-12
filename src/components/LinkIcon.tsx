import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export interface LinkIconProps extends React.ComponentProps<"a"> {
	icon: IconDefinition;
	to: string;
	label?: string;
}

export default function LinkIcon({ icon, to, label, className, ...rest }: LinkIconProps) {
	return (
		<a
			href={to}
			target="_blank"
			rel="noreferrer"
			aria-label={label}
			className={twMerge("focus p-1", className)}
			{...rest}
		>
			<FontAwesomeIcon icon={icon} size="xl" className="hover:text-accent-pink" />
		</a>
	);
}
