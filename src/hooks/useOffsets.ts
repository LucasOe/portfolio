import { type ComponentRef, useEffect, useState, type RefObject } from "react";

// Calculate the distance between the target ref and other refs
export default function useOffsets(
	targetRef: RefObject<ComponentRef<"div"> | null>,
	otherRefs: RefObject<(ComponentRef<"div"> | null)[]>
): number[] {
	const [offsets, setOffsets] = useState<number[]>([]);

	useEffect(() => {
		const calculateDistances = () => {
			const newOffsets = otherRefs.current.map((other) => {
				if (!targetRef.current) return null;
				if (!other) return null;

				const targetRect = targetRef.current.getBoundingClientRect();
				const otherRect = other.getBoundingClientRect();

				const targetMid = targetRect.top + otherRect.height / 2;
				const otherMid = otherRect.top + otherRect.height / 2;

				// Distance from middle of `other` to middle of `target`
				return otherMid - targetMid;
			});

			setOffsets(newOffsets as number[]);
		};

		window.addEventListener("resize", calculateDistances);
		window.addEventListener("scroll", calculateDistances);
		calculateDistances();

		return () => {
			window.removeEventListener("resize", calculateDistances);
			window.removeEventListener("scroll", calculateDistances);
		};
	}, [targetRef, otherRefs]);

	return offsets;
}
