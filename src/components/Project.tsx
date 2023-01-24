import { IconContext } from "react-icons";
import { DiCss3, DiMysql } from "react-icons/di";
import { FaHtml5, FaJava, FaReact, FaRust, FaSass } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiJavascript, SiPhp, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

type Icons = {
	[key: string]: { name: string; icon: JSX.Element };
};

type ProjectProps = {
	children: React.ReactNode;
	title: string;
	link: string;
	stack: (keyof Icons)[];
	arrowPosition: number;
	className?: string;
};

const icons: Icons = {
	java: {
		icon: <FaJava />,
		name: "Java",
	},
	mysql: {
		icon: <DiMysql />,
		name: "MySQL",
	},
	html: {
		icon: <FaHtml5 />,
		name: "HTML",
	},
	css: {
		icon: <DiCss3 />,
		name: "CSS",
	},
	sass: {
		icon: <FaSass />,
		name: "SASS",
	},
	php: {
		icon: <SiPhp />,
		name: "PHP",
	},
	javascript: {
		icon: <SiJavascript />,
		name: "Javascript",
	},
	react: {
		icon: <FaReact />,
		name: "React",
	},
	tailwind: {
		icon: <SiTailwindcss />,
		name: "Tailwind CSS",
	},
	vite: {
		icon: <SiVite />,
		name: "Vite",
	},
	typescript: {
		icon: <SiTypescript />,
		name: "Typescript",
	},
	rust: {
		icon: <FaRust />,
		name: "Rust",
	},
};

export default function Project({ children, title, link, stack, arrowPosition, className }: ProjectProps) {
	return (
		<div className={`${className} flex transition-transform duration-300 hover:-translate-x-2`}>
			<div className="flex w-full flex-col space-y-2 rounded-md bg-neutral-700 p-4">
				<div className="flex items-start justify-between">
					<h3 className="m-0">{title}</h3>
					<a href={link} target="_blank" rel="noreferrer">
						<FiExternalLink className="h-6 w-6 hover:text-green-500" />
					</a>
				</div>
				<p className="m-0">{children}</p>
				<div className="flex space-x-2">
					{stack.map((icon) => (
						<div key={icons[icon].name}>
							<div className="h-7 w-7 rounded-md bg-neutral-200 [&>#tooltip]:hover:flex">
								<IconContext.Provider value={{ className: "w-full h-full text-neutral-900 p-1" }}>
									{icons[icon].icon}
								</IconContext.Provider>
								<div id="tooltip" className="absolute mt-1 hidden flex-col">
									{/*Arrow*/}
									<div className="relative left-[6px] h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-neutral-200" />
									{/*Textbox*/}
									<div className="rounded-md bg-neutral-200 p-1 px-2">
										<p className=" m-0 font-mono leading-none text-neutral-700">
											{icons[icon].name}
										</p>
									</div>
								</div>
							</div>
						</div>
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
