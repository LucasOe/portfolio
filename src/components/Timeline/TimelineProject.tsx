import { motion } from "framer-motion";
import { forwardRef } from "react";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

import LinkIcon, { type LinkIconProps } from "@/components/LinkIcon";
import TimelineLabel from "@/components/Timeline/TimelineLabel";

export type TimelineProjectProps = React.ComponentProps<typeof motion.div> & {
	description: string;
	title: string;
	links: LinkIconProps[];
	stack: string[];
	time: number;
	arrowPosition: number;
};

export default forwardRef<HTMLDivElement, TimelineProjectProps>(function TimelineProject(
	{ description, title, links, stack, arrowPosition, className, ...rest }: TimelineProjectProps,
	ref
) {
	return (
		<motion.div
			initial={{ x: -48 }}
			whileInView={{ x: 0 }}
			viewport={{ margin: "100% 0px 0px 0px" }}
			className={twMerge("flex w-full", className)}
			{...rest}
		>
			<div className="flex w-full flex-col space-y-4 rounded-lg bg-secondary p-4">
				<div className="flex items-start justify-between">
					<h3 className="text-2xl font-bold leading-none">{title}</h3>
					<div className="-m-1 flex gap-3">
						{links.map((link) => (
							<LinkIcon key={link.to} icon={link.icon} to={link.to} label={link.label} className="p-1" />
						))}
					</div>
				</div>
				<Markdown className="prose prose-lg">{description}</Markdown>
				<div className="flex flex-wrap gap-2">
					{stack.map((tech) => (
						<TimelineLabel key={tech} text={tech} />
					))}
				</div>
			</div>
			{/*Arrow*/}
			<div className="hidden h-full py-4 sm:flex">
				<div
					ref={ref}
					className="size-0 relative border-y-[10px] border-l-[10px] border-y-transparent border-l-secondary"
					style={{ top: `${arrowPosition}%`, transform: `translateY(-${arrowPosition}%)` }}
				/>
			</div>
		</motion.div>
	);
});
