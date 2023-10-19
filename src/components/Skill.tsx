import { IconContext } from "react-icons";
import Markdown from "react-markdown";
import Tilt from "react-parallax-tilt";
import { twMerge } from "tailwind-merge";

export type SkillProps = React.ComponentProps<"div"> & {
	children: string;
	title: string;
	icon: React.ReactNode;
};

export default function Skill({ children, title, icon, className }: SkillProps) {
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
			className={twMerge(
				"pointer-events-none w-full rounded-md bg-neutral-700 p-5 transform-style-3d backface-hidden md:pointer-events-auto",
				className
			)}
		>
			<div className="mb-2 flex items-center justify-between gap-4 translate-z-8">
				<h3 className="m-0 font-mono">{title}</h3>
				<IconContext.Provider value={{ className: "w-10 h-10" }}>{icon}</IconContext.Provider>
			</div>
			<div className="flex gap-2 transform-style-3d translate-z-4">
				<div aria-hidden="true" className="not-prose flex select-none flex-col items-center justify-between">
					<span className="font-mono text-sm font-semibold text-neutral-500">{"<h3>"}</span>
					<div className="m-1 h-full w-[2px] rounded-full bg-neutral-500" />
					<span className="font-mono text-sm font-semibold text-neutral-500">{"</h3>"}</span>
				</div>
				<div className="translate-z-4">
					<Markdown>{children}</Markdown>
				</div>
			</div>
		</Tilt>
	);
}
