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

	return (
		<div className={className}>
			<div className="flex">
				{children}
				<div className="relative hidden sm:flex">
					<div className="my-4 mx-2 w-2 rounded-full bg-neutral-700" />
					<div className="relative -left-6 -mr-6">
						<div ref={inputRef} className="sticky top-1/2 flex">
							<div className="mx-1 my-2 h-4 w-4 rounded-full bg-emerald-400" />
							<div className="my-2 h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-neutral-700" />
							<div className="w-28 rounded-md bg-neutral-700 text-center">
								<p className="m-0 font-mono font-bold">{`${
									months[date.getMonth()]
								} ${date.getFullYear()}`}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
