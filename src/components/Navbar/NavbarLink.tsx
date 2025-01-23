import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type NavbarLinkProps = React.ComponentProps<typeof HashLink> & {
	text: string;
	to: string;
};

export default function NavbarLink({ text, to, className, ...rest }: NavbarLinkProps) {
	return (
		<HashLink
			to={to}
			smooth
			target="_self"
			rel="noreferrer"
			className={twMerge("focus outline-hidden px-2 no-underline", className)}
			{...rest}
		>
			<span className="font-mono text-lg font-semibold hover:bg-accent-violet hover:bg-gradient-to-bl hover:from-accent-pink hover:bg-cover hover:bg-clip-text hover:text-transparent">
				{`//${text}`}
			</span>
		</HashLink>
	);
}
