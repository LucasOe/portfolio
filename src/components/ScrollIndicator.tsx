import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import useMousePosition from "@/hooks/useMousePosition";
import { getRelativeMousePos } from "@/utils/utils";
import { ElementRef, useRef } from "react";
import { BsArrowDownShort } from "react-icons/bs";

export type ScrollIndicatorProps = React.ComponentProps<"div"> & {
	offset: number;
};

export default function ScrollIndicator({ offset, className, ...rest }: ScrollIndicatorProps) {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0]);

	const ref = useRef<ElementRef<"div">>(null);
	const mousePos = useMousePosition();
	const mousePosRel = getRelativeMousePos(mousePos, ref);

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
	mouse.x.set(mousePosRel.x);
	mouse.y.set(mousePosRel.y);

	const distance = {
		x: useTransform(mouse.x, [-window.innerWidth / 2, window.innerWidth / 2], [-offset, offset]),
		y: useTransform(mouse.y, [-window.innerHeight / 2, window.innerHeight / 2], [-offset, offset]),
	};

	return (
		<div ref={ref} className={className} {...rest}>
			<motion.div
				style={{ opacity: opacity }}
				className="group relative flex select-none items-center justify-center"
			>
				{/* Foreground */}
				<HashLink to="#about" smooth aria-label="Scroll Down" tabIndex={-1} className="relative z-10 flex">
					<div className="inline-block rounded-full border-2 border-neutral-200 group-hover:border-transparent">
						<BsArrowDownShort className="h-16 w-16 p-2 text-neutral-200 group-hover:fill-gradient" />
					</div>
				</HashLink>
				{/* Background */}
				<motion.div
					style={{ x: distance.x, y: distance.y }}
					className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
				>
					<div className="background-gradient h-full w-full rounded-full border-[3px] border-transparent" />
				</motion.div>
			</motion.div>
		</div>
	);
}
