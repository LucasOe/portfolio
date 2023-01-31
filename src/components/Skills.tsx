import Label from "./Label";

type SkillsProps = {
	text: string;
	skills: string[];
	className?: string;
};

export default function Skills({ text, skills, className }: SkillsProps) {
	return (
		<div className={`${className} w-full rounded-md bg-neutral-700 p-2`}>
			<h3 className="m-0 mb-2 font-mono">{text}</h3>
			<div className="flex gap-2">
				{skills.map((skill, index) => (
					<Label key={index} text={skill} />
				))}
			</div>
		</div>
	);
}
