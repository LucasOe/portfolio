import { useRef } from "react";
import useParentOffset from "../hooks/useParentOffset";

type DateProps = {
	className?: string;
};

export default function StickyDate({ className }: DateProps) {
	const inputRef = useRef<HTMLDivElement>(null);
	// The offset to the parent in percentage
	const parentOffset = useParentOffset(inputRef);

	return (
		<div ref={inputRef} className={`${className} sticky top-1/2 float-right`}>
			<div className="h-12 w-48 bg-slate-400">{parentOffset}</div>
		</div>
	);
}
