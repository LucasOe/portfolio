import { IconContext } from "react-icons";

type SkillsProps = {
	children: React.ReactNode;
	title: string;
	icon: React.ReactNode;
	className?: string;
};

export default function Skills({ children, title, icon, className }: SkillsProps) {
	return (
		<div className={`${className} w-full rounded-md bg-neutral-700 p-4`}>
			<div className="mb-2 flex items-center justify-between gap-4">
				<h3 className="m-0 font-mono">{title}</h3>
				<IconContext.Provider value={{ className: "w-10 h-10" }}>{icon}</IconContext.Provider>
			</div>
			<div className="flex gap-2">
				<div
					aria-hidden="true"
					className="flex select-none flex-col items-center justify-between
					font-mono text-sm font-semibold leading-normal text-neutral-500"
				>
					<span>&#60;h3&#62;</span>
					<div className="m-auto my-2 h-full w-[2px] rounded-full bg-neutral-500" />
					<span>&#60;/h3&#62;</span>
				</div>
				<p>{children}</p>
			</div>
		</div>
	);
}
