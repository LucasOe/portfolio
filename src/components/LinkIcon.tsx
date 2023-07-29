import { ReactNode } from "react";
import { IconContext } from "react-icons";

export type LinkIconProps = React.HTMLAttributes<HTMLAnchorElement> & {
	icon: ReactNode;
	to: string;
	label?: string;
};

export default function LinkIcon({ icon, to, label, className, ...rest }: LinkIconProps) {
	return (
		<a
			href={to}
			target="_blank"
			rel="noreferrer"
			aria-label={label}
			className={`focus rounded-sm ${className}`}
			{...rest}
		>
			<IconContext.Provider value={{ className: "h-6 w-6 hover:text-green-400" }}>{icon}</IconContext.Provider>
		</a>
	);
}
