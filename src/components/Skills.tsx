import { IconContext } from "react-icons";
import ReactMarkdown from "react-markdown";

type SkillsProps = {
	children: string;
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
				<div aria-hidden="true" className="not-prose flex select-none flex-col items-center justify-between">
					<span className="font-mono text-sm font-semibold text-neutral-500">{"<h3>"}</span>
					<div className="m-1 h-full w-[2px] rounded-full bg-neutral-500" />
					<span className="font-mono text-sm font-semibold text-neutral-500">{"</h3>"}</span>
				</div>
				<ReactMarkdown>{children}</ReactMarkdown>
			</div>
		</div>
	);
}
