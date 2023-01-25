import { DiCss3, DiMysql } from "react-icons/di";
import { FaHtml5, FaJava, FaReact, FaRust, FaSass } from "react-icons/fa";
import { SiJavascript, SiPhp, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export type Icons = {
	[key: string]: { name: string; icon: JSX.Element };
};

export const icons: Icons = {
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
