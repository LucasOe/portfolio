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
			<div className="flex w-full flex-col space-y-4 rounded-md bg-neutral-700 p-4">
				<div className="flex items-start justify-between">
					<h3 className="m-0 leading-none">{title}</h3>
					<div className="flex gap-3">
						{links.map((link, index) => (
							<LinkIcon key={index} icon={link.icon} to={link.to} label={link.label} />
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
			<div className="hidden h-full py-2 sm:flex">
				<div
					ref={ref}
					className="relative h-0 w-0 border-y-8 border-l-8 border-y-transparent border-l-neutral-700"
					style={{ top: `${arrowPosition}%`, transform: `translateY(-${arrowPosition}%)` }}
				/>
			</div>
		</div>
	);
});
