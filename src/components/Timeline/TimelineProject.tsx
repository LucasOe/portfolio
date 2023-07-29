import { ReactNode, forwardRef } from "react";
import { IconContext } from "react-icons";
import ReactMarkdown from "react-markdown";

import TimelineLabel from "@/components/Timeline/TimelineLabel";

export type TimelineProjectProps = React.HTMLAttributes<HTMLDivElement> & {
	description: string;
	title: string;
	links: {
		to: string;
		icon: ReactNode;
	}[];
	stack: string[];
	time: number;
	arrowPosition: number;
};

export default forwardRef<HTMLDivElement, TimelineProjectProps>(function TimelineProject(
	{ description, title, links, stack, arrowPosition, className }: TimelineProjectProps,
	ref
) {
	return (
		<div className={`flex w-full transition-transform duration-300 hover:-translate-x-2 ${className}`}>
			<div className="flex w-full flex-col space-y-4 rounded-md bg-neutral-700 p-4">
				<div className="flex items-start justify-between">
					<h3 className="m-0 leading-none">{title}</h3>
					<div className="flex gap-3">
						{links.map((link, index) => (
							<a
								key={index}
								href={link.to}
								target="_blank"
								rel="noreferrer"
								aria-label={`${title} on Github`}
								className="focus rounded-sm"
							>
								<IconContext.Provider value={{ className: "h-6 w-6 hover:text-green-400" }}>
									{link.icon}
								</IconContext.Provider>
							</a>
						))}
					</div>
				</div>
				<ReactMarkdown>{description}</ReactMarkdown>
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