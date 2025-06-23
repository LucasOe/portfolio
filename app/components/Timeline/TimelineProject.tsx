import { motion, type HTMLMotionProps } from "motion/react";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

import LinkIcon, { type LinkIconProps } from "@/components/LinkIcon";
import TimelineLabel from "@/components/Timeline/TimelineLabel";

export interface TimelineProjectProps extends Omit<HTMLMotionProps<"li">, "ref"> {
	description: string;
	title: string;
	links?: LinkIconProps[];
	stack?: string[];
	time: number;
	arrowPosition: number;
	ref?: React.Ref<HTMLDivElement>;
}

export default function TimelineProject({
	description,
	title,
	links,
	stack,
	arrowPosition,
	ref,
	className,
	...rest
}: TimelineProjectProps) {
	return (
		<motion.li
			initial={{ x: -48, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ margin: "100% 0px 0px 0px" }}
			className={twMerge("flex w-full", className)}
			{...rest}
		>
			<div className="bg-secondary flex w-full flex-col space-y-4 rounded-lg p-4">
				<div className="flex items-start justify-between">
					<h3 className="text-2xl leading-none font-bold">{title}</h3>
					<div className="-m-1 flex gap-3">
						{links?.map((link) => (
							<LinkIcon key={link.to} icon={link.icon} to={link.to} label={link.label} />
						))}
					</div>
				</div>
				<div className="prose prose-lg">
					<Markdown>{description}</Markdown>
				</div>
				<div className="flex flex-wrap gap-2">
					{stack?.map((tech) => (
						<TimelineLabel key={tech} text={tech} />
					))}
				</div>
			</div>
			{/*Arrow*/}
			<div className="hidden h-full py-4 sm:flex">
				<div
					ref={ref}
					className="border-l-secondary relative size-0 border-y-[10px] border-l-[10px] border-y-transparent"
					style={{ top: `${arrowPosition}%`, transform: `translateY(-${arrowPosition}%)` }}
				/>
			</div>
		</motion.li>
	);
}
