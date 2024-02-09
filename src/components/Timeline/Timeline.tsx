import { ElementRef, useRef } from "react";
import { twMerge } from "tailwind-merge";

import TimelineProject, { TimelineProjectProps } from "@/components/Timeline/TimelineProject";
import useOffset from "@/hooks/useOffset";
import { clamp, lerp, negativeValues } from "@/utils/math";

export type TimelineProps = React.ComponentProps<"div"> & {
	projects: TimelineProjectProps[];
};

function unixTime(time: number): string {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const date = new Date(time * 1000);
	return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getCurrentDate(offsets: number[], times: number[]): string {
	const index = clamp(negativeValues(offsets) - 1, 0, offsets.length);
	const percentage = -offsets[index] / (offsets[index + 1] - offsets[index]);
	const currentTime = lerp(times[index], times[index + 1], percentage);

	return unixTime(currentTime);
}

const projectOffsets: number[] = [];
const projectTimes: number[] = [];

export default function Timeline({ projects, className, ...rest }: TimelineProps) {
	const scrollbarRef = useRef<ElementRef<"div">>(null);

	return (
		<div className={twMerge("flex", className)} {...rest}>
			<div className="flex grow flex-col gap-3">
				{projects.map((props: TimelineProjectProps, index) => {
					const projectRef = useRef<ElementRef<"div">>(null);
					projectOffsets[index] = useOffset(scrollbarRef, projectRef);
					projectTimes[index] = props.time;

					return <TimelineProject key={index} {...props} ref={projectRef} />;
				})}
			</div>
			<div className="relative hidden sm:flex">
				{/*Progress Bar*/}
				<div className="mx-2 my-6 flex w-2 rounded-full bg-secondary [contain:paint]">
					<div className="sticky bottom-1/2 self-end">
						<div className="absolute h-screen w-2 bg-accent-pink bg-gradient-to-b from-accent-violet from-50% -translate-y-full" />
					</div>
				</div>
				{/*Sticky*/}
				<div className="relative -left-6 -mr-6">
					<div ref={scrollbarRef} className="sticky top-[calc(50%-1rem)] my-2 flex">
						{/*Dot*/}
						<div className="mx-1 my-2 size-4 rounded-full bg-accent-pink" />
						{/*Arrow*/}
						<div className="my-2 size-0 border-y-8 border-r-8 border-y-transparent border-r-secondary" />
						{/*Textbox*/}
						<div className="w-28 rounded-md bg-secondary text-center">
							<p className="m-0 font-mono font-bold">{getCurrentDate(projectOffsets, projectTimes)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
