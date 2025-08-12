import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import Tilt, { type ReactParallaxTiltProps } from "react-parallax-tilt";
import { twMerge } from "tailwind-merge";

export interface SkillProps extends ReactParallaxTiltProps {
	children: string;
	title: string;
	icon: IconDefinition;
}

export default function Skill({ children, title, icon, className, ...rest }: SkillProps) {
	return (
		<Tilt
			tiltReverse
			tiltMaxAngleX={6}
			tiltMaxAngleY={6}
			glareEnable
			glareMaxOpacity={0.1}
			glareBorderRadius="0.375rem"
			transitionSpeed={1500}
			scale={0.95}
			glareColor="#f472b6"
			className={twMerge(
				"bg-secondary pointer-events-none flex w-full flex-col rounded-lg p-5 backface-hidden transform-3d md:pointer-events-auto",
				className
			)}
			{...rest}
		>
			<div className="mb-2 flex translate-z-8 items-center justify-between">
				<h3 className="font-mono text-2xl font-bold">{title}</h3>
				<FontAwesomeIcon icon={icon} size="2xl" />
			</div>
			<div className="flex h-full translate-z-4 gap-2 transform-3d">
				<div aria-hidden="true" className="flex flex-col items-center justify-between select-none">
					<p className="font-mono text-sm font-semibold whitespace-nowrap text-neutral-600">{"<h3>"}</p>
					<div className="m-1 h-full w-[2px] rounded-full bg-neutral-600" />
					<p className="font-mono text-sm font-semibold whitespace-nowrap text-neutral-600">{"</h3>"}</p>
				</div>
				<div className="flex translate-z-4 py-6">
					<div className="prose prose-lg tracking-tight [&>p]:text-balance">
						<Markdown>{children}</Markdown>
					</div>
				</div>
			</div>
		</Tilt>
	);
}
