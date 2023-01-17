import { useRef } from "react";
import useParentOffset from "../hooks/useParentOffset";

type DateProps = {
	children: React.ReactNode;
	unixBegin: number;
	unixEnd: number;
	className?: string;
};

export default function Timeline({ children, unixBegin, unixEnd, className }: DateProps) {
	const inputRef = useRef<HTMLDivElement>(null);
	// The offset to the parent in percentage
	const percentage = useParentOffset(inputRef);
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const currentTime = Math.floor((unixEnd - unixBegin) * percentage) + unixBegin;
	const date = new Date(currentTime * 1000);
	const dateText = `${months[date.getMonth()]} ${date.getFullYear()}`;

	return (
		<div className={className}>
			<div className="flex">
				{children}
				<div className="relative hidden sm:flex">
					{/*Progress Bar*/}
					<div className=" my-4 mx-2 flex w-2 rounded-full  bg-neutral-700" style={{ contain: "paint" }}>
						<div className="sticky bottom-[calc(50%-1rem)] self-end">
							<div className="absolute h-screen w-2 -translate-y-full bg-emerald-200 bg-gradient-to-t from-emerald-500" />
						</div>
					</div>
					{/*Sticky*/}
					<div className="relative -left-6 -mr-6">
						<div ref={inputRef} className="sticky top-1/2 flex">
							{/*Dot*/}
							<div className="mx-1 my-2 h-4 w-4 rounded-full bg-emerald-500" />
							{/*Arrow*/}
							<div className="my-2 h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-neutral-700" />
							{/*Textbox*/}
							<div className="w-28 rounded-md bg-neutral-700 text-center">
								<p className="m-0 font-mono font-bold">{dateText}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
