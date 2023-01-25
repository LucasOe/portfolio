import { IconContext } from "react-icons";
import { icons } from "../data/Icons";

type IconProps = {
	icon: string | number;
};

export default function Icon({ icon }: IconProps) {
	return (
		<div className="h-7 w-7 rounded-md bg-neutral-200 [&>#tooltip]:hover:visible">
			<IconContext.Provider value={{ className: "w-full h-full text-neutral-900 p-1" }}>
				{icons[icon].icon}
			</IconContext.Provider>
			<div id="tooltip" className="invisible absolute mt-1 flex flex-col">
				{/*Arrow*/}
				<div className="relative left-[6px] h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-neutral-200" />
				{/*Textbox*/}
				<div className="rounded-md bg-neutral-200 p-1 px-2">
					<p className=" m-0 font-mono leading-none text-neutral-700">{icons[icon].name}</p>
				</div>
			</div>
		</div>
	);
}
