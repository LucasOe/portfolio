import { Icons } from "../data/Icons";
import TooltipIcon from "./TooltipIcon";

type SkillsProps = {
	text: string;
	skills: (keyof Icons)[];
	className?: string;
};

export default function Skills({ text, skills, className }: SkillsProps) {
	return (
		<div className={`${className} w-full rounded-md bg-neutral-700 p-2`}>
			<h3 className="m-0 mb-2 font-mono">{text}</h3>
			<div className="flex gap-2">
				{skills.map((icon, index) => (
					<TooltipIcon key={index} icon={icon} className="h-10 w-10" />
				))}
			</div>
		</div>
	);
}
