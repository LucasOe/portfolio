import { useEffect, useRef, useState, type ElementRef } from "react";

import TimelineProject, { type TimelineProjectProps } from "@/components/Timeline/TimelineProject";
import Button from "@/components/Button";
import useOffset from "@/hooks/useOffset";
import { clamp, lerp, negativeValues } from "@/utils/math";

export type TimelineData = {
	name: string;
	projects: TimelineProjectProps[];
};

export type TimelineProps = React.ComponentProps<"div"> & {
	data: TimelineData[];
};

function convertUnixTime(time: number): string {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const date = new Date(time * 1000);
	return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getCurrentDate(offsets: number[], times: number[]): string {
	const index = clamp(negativeValues(offsets) - 1, 0, offsets.length);
	const percentage = -offsets[index] / (offsets[index + 1] - offsets[index]);
	const currentTime = lerp(times[index], times[index + 1], percentage);

	if (Number.isNaN(currentTime)) return "";
	return convertUnixTime(currentTime);
}

export default function Timeline({ data, className, ...rest }: TimelineProps) {
	const scrollbarRef = useRef<ElementRef<"div">>(null);
	const [selected, setSelected] = useState(0);
	const [currentDate, setCurrentDate] = useState("");

	const projectRefs = data.map((category) => category.projects.map(() => useRef<ElementRef<"div">>(null)));
	const projectOffsets = data.map((_, index) => projectRefs[index].map((ref) => useOffset(scrollbarRef, ref)));
	const projectTimes = data.map((category) => category.projects.map((props) => props.time));

	useEffect(() => {
		setCurrentDate(getCurrentDate(projectOffsets[selected], projectTimes[selected]));
	}, [selected, projectOffsets, projectTimes]);

	return (
		<div className={className} {...rest}>
			{/* Category Buttons */}
			<div className="mb-6 flex gap-3">
				{data.map((category, index) => (
					<Button key={category.name} onClick={() => setSelected(index)}>
						{category.name}
					</Button>
				))}
			</div>
			<div className="flex">
				{/* Project List */}
				<div className="flex grow flex-col gap-3">
					{data[selected].projects.map((props, index) => (
						<TimelineProject key={props.title} {...props} ref={projectRefs[selected][index]} />
					))}
				</div>
				{/* Progress Bar and Date Display */}
				<div className="relative hidden sm:flex">
					{/* Progress Bar */}
					<div className="mx-2 my-6 flex w-2 rounded-full bg-secondary [contain:paint]">
						<div className="sticky bottom-1/2 self-end">
							<div className="absolute h-screen w-2 bg-accent-pink bg-gradient-to-b from-accent-violet from-50% -translate-y-full" />
						</div>
					</div>
					{/* Sticky Date Display */}
					<div className="relative -left-6 -mr-6">
						<div ref={scrollbarRef} className="sticky top-[calc(50%-1rem)] my-2 flex">
							{/* Dot */}
							<div className="mx-1 my-2 size-4 rounded-full bg-accent-pink" />
							{/* Arrow */}
							<div className="my-2 size-0 border-y-8 border-r-8 border-y-transparent border-r-secondary" />
							{/* Textbox */}
							<div className="w-28 rounded-md bg-secondary text-center">
								<p className="m-0 font-mono font-bold">{currentDate}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
