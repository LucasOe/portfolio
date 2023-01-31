import { FiExternalLink } from "react-icons/fi";
import Label from "./Label";

type ProjectProps = {
	children: React.ReactNode;
	title: string;
	link: string;
	stack: string[];
	arrowPosition: number;
	className?: string;
};

export default function Project({ children, title, link, stack, arrowPosition, className }: ProjectProps) {
	return (
		<div className={`${className} flex transition-transform duration-300 hover:-translate-x-2`}>
			<div className="flex w-full flex-col space-y-4 rounded-md bg-neutral-700 p-4">
				<div className="flex items-start justify-between">
					<h3 className="m-0 leading-none">{title}</h3>
					<a href={link} target="_blank" rel="noreferrer">
						<FiExternalLink className="h-6 w-6 hover:text-green-500" />
					</a>
				</div>
				<p className="m-0">{children}</p>
				<div className="flex space-x-2">
					{stack.map((tech, index) => (
						<Label key={index} text={tech} />
					))}
				</div>
			</div>
			{/*Arrow*/}
			<div className="hidden h-full py-2 sm:flex">
				<div
					className="relative h-0 w-0 border-y-8 border-l-8 border-y-transparent border-l-neutral-700"
					style={{ top: `${arrowPosition}%`, transform: `translateY(-${arrowPosition}%)` }}
				/>
			</div>
		</div>
	);
}
