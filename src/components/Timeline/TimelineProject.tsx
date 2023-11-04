import { forwardRef } from "react";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

import LinkIcon, { LinkIconProps } from "@/components/LinkIcon";
import TimelineLabel from "@/components/Timeline/TimelineLabel";

export type TimelineProjectProps = React.ComponentProps<"div"> & {
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
		<div
			className={twMerge("flex w-full transition-transform duration-300 hover:-translate-x-2", className)}
			{...rest}
		>
			<div className="flex w-full flex-col space-y-4 rounded-lg bg-secondary p-4">
				<div className="flex items-start justify-between">
					<h3 className="m-0 leading-none">{title}</h3>
					<div className="-m-1 flex gap-3">
						{links.map((link, index) => (
							<LinkIcon key={index} icon={link.icon} to={link.to} label={link.label} className="p-1" />
						))}
					</div>
				</div>
				<Markdown>{description}</Markdown>
				<div className="flex flex-wrap gap-2">
					{stack.map((tech, index) => (
						<TimelineLabel key={index} text={tech} />
					))}
				</div>
			</div>
			{/*Arrow*/}
			<div className="hidden h-full py-4 sm:flex">
				<div
					ref={ref}
					className="relative h-0 w-0 border-y-[10px] border-l-[10px] border-y-transparent border-l-secondary"
					style={{ top: `${arrowPosition}%`, transform: `translateY(-${arrowPosition}%)` }}
				/>
			</div>
		</div>
	);
});
