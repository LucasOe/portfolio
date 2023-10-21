import { twMerge } from "tailwind-merge";

export type HeaderProps = React.ComponentProps<"div"> & {
	text: string;
	id: string;
};

export default function Header({ text, id, className, ...rest }: HeaderProps) {
	return (
		<h2 id={id} className={twMerge("mt-24 scroll-m-[12vh] font-mono", className)} {...rest}>
			{`# ${text}`}
		</h2>
	);
}
