import { RefObject, useEffect, useState } from "react";

export default function useParentOffset(reference: RefObject<HTMLElement>) {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			const element = reference.current;
			const parent = reference.current?.parentElement;
			if (element && parent) {
				const top = element.getBoundingClientRect().top - parent.getBoundingClientRect().top;
				const height = parent.getBoundingClientRect().height - element.getBoundingClientRect().height;
				if (height != 0) setScrollPosition(top / height);
			}
		};
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
}
