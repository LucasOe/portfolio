import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import useMousePosition from "@/hooks/useMousePosition";
import { getRelativeMousePos } from "@/utils/utils";
import { useRef, type ElementRef } from "react";
import { BsArrowDownShort } from "react-icons/bs";

export type ScrollIndicatorProps = React.ComponentProps<"div"> & {
	offset: number;
};

export default function ScrollIndicator({ offset, className, ...rest }: ScrollIndicatorProps) {
	const hX = window.innerWidth / 2;
	const hY = window.innerHeight / 2;

	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, hY], [1, 0]);

	const ref = useRef<ElementRef<"div">>(null);
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
				className="group relative flex select-none items-center justify-center"
			>
				{/* Foreground */}
				<HashLink to="#about" smooth aria-label="Scroll Down" tabIndex={-1} className="relative z-10 flex">
					<div className="inline-block rounded-full border-2 border-neutral-200 group-hover:background-gradient group-hover:border-[3px] group-hover:border-transparent">
						<BsArrowDownShort className="size-16 p-2 text-neutral-200 group-hover:fill-accent-pink" />
					</div>
				</HashLink>
				{/* Background */}
				<motion.div
					style={{ x, y }}
					className="size-full absolute left-0 top-0 flex items-center justify-center group-hover:hidden"
				>
					<div className="size-full background-gradient rounded-full border-[3px] border-transparent" />
				</motion.div>
			</motion.div>
		</div>
	);
}
