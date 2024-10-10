import { IconContext } from "react-icons";
import Markdown from "react-markdown";
import Tilt from "react-parallax-tilt";
import { twMerge } from "tailwind-merge";

export type SkillProps = React.ComponentProps<typeof Tilt> & {
	children: string;
	title: string;
	icon: React.ReactNode;
};

export default function Skill({ children, title, icon, className, ...rest }: SkillProps) {
	return (
		<Tilt
			tiltReverse={true}
			tiltMaxAngleX={6}
			tiltMaxAngleY={6}
			glareEnable={true}
			glareMaxOpacity={0.1}
			glareBorderRadius="0.375rem"
			transitionSpeed={1500}
			scale={0.95}
			glareColor="#f472b6"
			className={twMerge(
				"pointer-events-none flex w-full flex-col rounded-lg bg-secondary p-5 transform-style-3d backface-hidden md:pointer-events-auto",
				className
			)}
			{...rest}
		>
			<div className="mb-2 flex items-center justify-between gap-4 translate-z-8">
				<h3 className="m-0 font-mono">{title}</h3>
				<IconContext.Provider value={{ className: "size-10" }}>{icon}</IconContext.Provider>
			</div>
			<div className="flex h-full gap-2 transform-style-3d translate-z-4">
				<div aria-hidden="true" className="not-prose flex select-none flex-col items-center justify-between">
					<p className="whitespace-nowrap font-mono text-sm font-semibold text-neutral-600">{"<h3>"}</p>
					<div className="m-1 h-full w-[2px] rounded-full bg-neutral-600" />
					<p className="whitespace-nowrap font-mono text-sm font-semibold text-neutral-600">{"</h3>"}</p>
				</div>
				<div className="translate-z-4">
					<Markdown className="[&>p]:text-balance">{children}</Markdown>
				</div>
			</div>
		</Tilt>
	);
}
