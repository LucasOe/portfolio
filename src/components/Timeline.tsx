import { useRef } from "react";
import useParentOffset from "../hooks/useParentOffset";

type DateProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Timeline({ children, className }: DateProps) {
	const inputRef = useRef<HTMLDivElement>(null);
	// The offset to the parent in percentage
	const parentOffset = useParentOffset(inputRef);

	return (
		<div className={className}>
			<div className="flex">
				{children}
				<div className="relative flex">
					<div className="my-4 mx-2 w-2 rounded-full bg-neutral-700" />
					<div className="relative -left-6 -mr-6">
						<div ref={inputRef} className="sticky top-1/2 flex">
							<div className="mx-1 my-4 h-4 w-4 rounded-full bg-emerald-400" />
							<div className="h-12 w-36 rounded-md bg-neutral-700 text-center">{parentOffset}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
