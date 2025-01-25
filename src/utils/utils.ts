import type { ComponentRef, RefObject } from "react";

interface Pos { x: number; y: number }

// Returns the distance of the cursor relative to the center of the ref object
export function getRelativeMousePos(mosePos: Pos, ref: RefObject<ComponentRef<"div"> | null>): Pos {
	if (ref.current) {
		const boundingRect = ref.current.getBoundingClientRect();
		return {
			x: mosePos.x - boundingRect.left - boundingRect.width / 2,
			y: mosePos.y - boundingRect.top - boundingRect.height / 2,
		};
	}
	return { x: 0, y: 0 };
}
