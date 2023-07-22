import { useRef } from "react";
import useOffset from "../hooks/useOffset";
import { clamp, lerp, negativeValues } from "../utils/math";
import Project, { ProjectProps } from "./Project";

type TimelineProps = {
	projectProps: ProjectProps[];
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

export default function Timeline({ projectProps }: TimelineProps) {
	const scrollbarRef = useRef<HTMLDivElement>(null);
	return (
		<div className="flex">
			<div className="flex grow flex-col gap-3">
				{projectProps.map((props: ProjectProps, index) => {
					const projectRef = useRef<HTMLDivElement>(null);
					projectOffsets[index] = useOffset(scrollbarRef, projectRef);
					projectTimes[index] = props.time;

					return <Project key={index} {...props} arrowRef={projectRef} />;
				})}
			</div>
			<div className="relative hidden sm:flex">
				{/*Progress Bar*/}
				<div className=" mx-2 my-4 flex w-2 rounded-full bg-neutral-700" style={{ contain: "paint" }}>
					<div className="sticky bottom-1/2 self-end">
						<div className="absolute h-screen w-2 -translate-y-full bg-emerald-200 bg-gradient-to-t from-green-500" />
					</div>
				</div>
				{/*Sticky*/}
				<div className="relative -left-6 -mr-6">
					<div ref={scrollbarRef} className="sticky top-[calc(50%-1rem)] flex">
						{/*Dot*/}
						<div className="mx-1 my-2 h-4 w-4 rounded-full bg-green-500" />
						{/*Arrow*/}
						<div className="my-2 h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-neutral-700" />
						{/*Textbox*/}
						<div className="w-28 rounded-md bg-neutral-700 text-center">
							<p className="m-0 font-mono font-bold">{getCurrentDate(projectOffsets, projectTimes)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
