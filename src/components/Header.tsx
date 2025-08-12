import { twMerge } from "tailwind-merge";

export interface HeaderProps extends React.ComponentProps<"div"> {
	text: string;
}

export default function Header({ text, className, ...rest }: HeaderProps) {
	return (
		<h2
			className={twMerge("mt-24 mb-8 scroll-m-[12vh] font-mono text-3xl leading-10 font-bold", className)}
			{...rest}
		>
			{`# ${text}`}
		</h2>
	);
}
