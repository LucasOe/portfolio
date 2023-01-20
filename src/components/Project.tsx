type ProjectProps = {
	children: React.ReactNode;
	title: string;
	link?: string;
	arrowPosition: number;
	className?: string;
};

export default function Project({ children, title, arrowPosition, className }: ProjectProps) {
	return (
		<div className={`${className} flex transition-transform duration-300 hover:-translate-x-2`}>
			<div className="w-full rounded-md bg-neutral-700 p-4">
				<h3 className="m-0 mb-2">{title}</h3>
				<p className="m-0">{children}</p>
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
