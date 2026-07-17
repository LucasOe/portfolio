import type { HTMLMotionProps } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

import LinkIcon, { type LinkIconProps } from "@/components/LinkIcon";
import TimelineLabel from "@/components/Timeline/TimelineLabel";

export interface TimelineProjectProps extends Omit<HTMLMotionProps<"li">, "ref"> {
	description: string;
	title: string;
	links?: LinkIconProps[];
	extendedInfo?: React.ReactNode;
	stack?: string[];
	time: number;
	arrowPosition: number;
	onExpand?: (state: boolean) => void;
	ref?: React.Ref<HTMLDivElement>;
}

export default function TimelineProject({
	description,
	title,
	links,
	extendedInfo,
	stack,
	arrowPosition,
	onExpand,
	ref,
	className,
	...rest
}: TimelineProjectProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<motion.li
			variants={{
				hidden: { opacity: 0, x: -50 },
				visible: { opacity: 1, x: 0 },
			}}
			className={twMerge("flex w-full", className)}
			{...rest}
		>
			<div className="flex w-full flex-col space-y-4 rounded-lg bg-secondary p-4">
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
					<AnimatePresence initial={false}>
						{isExpanded && (
							<motion.div
								key="extended"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								className="overflow-hidden"
							>
								<div className="mb-6">{extendedInfo}</div>
							</motion.div>
						)}
					</AnimatePresence>
					{extendedInfo && (
						<button
							type="button"
							onClick={() => {
								setIsExpanded(!isExpanded);
								if (onExpand) onExpand(isExpanded); // callback
							}}
							className="cursor-pointer"
						>
							<span className="underline">{isExpanded ? "Show less" : "Show more"}</span>
						</button>
					)}
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
					className="relative size-0 border-y-10 border-l-10 border-y-transparent border-l-secondary"
					style={{
						top: `${arrowPosition}%`,
						transform: `translateY(-${arrowPosition}%)`,
					}}
				/>
			</div>
		</motion.li>
	);
}
