import { ElementRef, RefObject, useEffect, useState } from "react";

export default function useMousePosition(ref: RefObject<ElementRef<"div">>) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = (event: MouseEvent) => {
			if (ref.current) {
				const boundingRect = ref.current.getBoundingClientRect();
				const relMousePos = {
					x: event.clientX - boundingRect.left - boundingRect.width / 2,
					y: event.clientY - boundingRect.top - boundingRect.height / 2,
				};

				setMousePosition({ x: relMousePos.x, y: relMousePos.y });
			}
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return mousePosition;
}
