import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router";

import useMousePosition from "@/hooks/useMousePosition";
import { getRelativeMousePos } from "@/utils/utils";

export interface ScrollIndicatorProps extends React.ComponentProps<"div"> {
	offset: number;
}

export default function ScrollIndicator({ offset, className, ...rest }: ScrollIndicatorProps) {
	const hX = window.innerWidth / 2;
	const hY = window.innerHeight / 2;

	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, hY], [1, 0]);

	const ref = useRef<HTMLDivElement | null>(null);
	const mousePos = useMousePosition();
	const mousePosRel = getRelativeMousePos(mousePos, ref);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	mouseX.set(mousePosRel.x);
	mouseY.set(mousePosRel.y);
	const x = useTransform(mouseX, [-hX, hX], [-offset, offset]);
	const y = useTransform(mouseY, [-hY, hY], [-offset, offset]);

	return (
		<div ref={ref} className={className} {...rest}>
			<motion.div
				style={{ opacity: opacity }}
				whileHover={{ scale: 1.1 }}
				className="group relative flex items-center justify-center select-none"
			>
				{/* Foreground */}
				<Link to="#about" aria-label="Scroll Down" tabIndex={-1} className="relative z-10 flex">
					<div className="group-hover:border-gradient-3.5 rounded-full border-2 border-neutral-200">
						<BsArrowDownShort className="group-hover:fill-accent-pink size-16 p-2 text-neutral-200" />
					</div>
				</Link>
				{/* Background */}
				<motion.div
					style={{ x, y }}
					className="absolute top-0 left-0 flex size-full items-center justify-center group-hover:hidden"
				>
					<div className="border-gradient-3 size-full rounded-full border-transparent" />
				</motion.div>
			</motion.div>
		</div>
	);
}
