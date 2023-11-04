import { ElementRef, RefObject, useEffect, useState } from "react";

export default function useOffset(selfRef: RefObject<ElementRef<"div">>, otherRef: RefObject<ElementRef<"div">>) {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			const self = selfRef.current;
			const other = otherRef.current;

			if (self && other) {
				const top = self.getBoundingClientRect().top - other.getBoundingClientRect().top;
				const height = other.getBoundingClientRect().height - self.getBoundingClientRect().height;
				if (height != 0) setScrollPosition(top / height);
			}
		};
		window.addEventListener("resize", updatePosition);
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => {
			window.removeEventListener("resize", updatePosition);
			window.removeEventListener("scroll", updatePosition);
		};
	}, []);

	return scrollPosition;
}
