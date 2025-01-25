import { IconContext } from "react-icons";
import { twMerge } from "tailwind-merge";

export interface LinkIconProps extends React.ComponentProps<"a"> {
	icon: React.ReactNode;
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
			className={twMerge("focus", className)}
			{...rest}
		>
			<IconContext value={{ className: "size-6 hover:text-accent-pink" }}>{icon}</IconContext>
		</a>
	);
}
