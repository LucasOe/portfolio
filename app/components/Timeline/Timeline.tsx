import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import Button from "@/components/Button";
import TimelineProject, { type TimelineProjectProps } from "@/components/Timeline/TimelineProject";
import useOffsets from "@/hooks/useOffsets";
import { clamp, lerp, negativeValueCount } from "@/utils/math";

export interface TimelineData {
	name: string;
	projects: TimelineProjectProps[];
}

export interface TimelineProps extends React.ComponentProps<"div"> {
	data: TimelineData[];
}

function convertUnixTime(time: number): string {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const date = new Date(time * 1000);
	return `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function calculateDate(offsets: number[], times: number[]): string {
	// Interpolate between times based on the offset
	offsets = offsets.filter((offset) => offset !== null);
	const index = clamp(negativeValueCount(offsets), 1, offsets.length - 1) - 1;
	const percentage = -offsets[index] / (offsets[index + 1] - offsets[index]);
	const currentTime = lerp(times[index], times[index + 1], percentage);

	if (Number.isNaN(currentTime)) return "";
	return convertUnixTime(currentTime);
}

export default function Timeline({ data, className, ...rest }: TimelineProps) {
	const progressBarRef = useRef<HTMLDivElement | null>(null);
	const [selected, setSelected] = useState(0);
	const [currentDate, setCurrentDate] = useState("");

	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const projectOffsets = useOffsets(progressBarRef, projectRefs, selected);
	const projectTimes = data[selected].projects.map((project) => project.time);

	useEffect(() => {
		setCurrentDate(calculateDate(projectOffsets, projectTimes));
	}, [projectTimes, projectOffsets]);

	return (
		<div className={className} {...rest}>
			{/* Category Buttons */}
			<div className="mb-6 flex gap-3">
				{data.map((category, index) => (
					<Button
						key={category.name}
						outline={selected === index}
						disabled={selected === index}
						onClick={() => setSelected(index)}
					>
						{category.name}
					</Button>
				))}
			</div>
			<div className="flex">
				{/* Project List */}
				<motion.ul
					className="flex grow flex-col gap-3"
					initial={{
						transition: { staggerChildren: 0.2 },
					}}
				>
					{data[selected].projects.map((props, index) => (
						<TimelineProject
							key={props.title}
							{...props}
							ref={(el) => {
								projectRefs.current[index] = el;
							}}
						/>
					))}
				</motion.ul>
				{/* Progress Bar and Date Display */}
				<div className="relative hidden sm:flex">
					{/* Progress Bar */}
					<div className="bg-secondary mx-2 my-6 flex w-2 rounded-full [contain:paint]">
						<div className="sticky bottom-1/2 self-end">
							<div className="bg-accent-pink from-accent-violet absolute h-screen w-2 -translate-y-full bg-gradient-to-b from-50%" />
						</div>
					</div>
					{/* Sticky Date Display */}
					<div className="relative -left-6 -mr-6">
						<div className="sticky top-[calc(50%-1rem)] my-2 flex">
							{/* Dot */}
							<div className="bg-accent-pink mx-1 my-2 size-4 rounded-full" />
							{/* Arrow */}
							<div
								ref={progressBarRef}
								className="border-r-secondary my-2 size-0 border-y-8 border-r-8 border-y-transparent"
							/>
							{/* Textbox */}
							<div className="bg-secondary w-28 rounded-md text-center leading-8">
								<span className="font-mono text-lg font-bold">{currentDate}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
