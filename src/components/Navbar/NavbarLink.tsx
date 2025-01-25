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
			className={twMerge("focus p-2 no-underline outline-hidden", className)}
			{...rest}
		>
			<span className="hover:bg-accent-violet hover:from-accent-pink font-mono text-lg font-semibold hover:bg-gradient-to-bl hover:bg-cover hover:bg-clip-text hover:text-transparent">
				{`//${text}`}
			</span>
		</HashLink>
	);
}
