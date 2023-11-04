import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import useMousePosition from "@/hooks/useMousePosition";
import { ElementRef, useRef } from "react";
import { BsArrowDownShort } from "react-icons/bs";

export type ScrollIndicatorProps = React.ComponentProps<"div">;

export default function ScrollIndicator({ className, ...rest }: ScrollIndicatorProps) {
	const { scrollY } = useScroll();
	// Map values from [0, h/2] to [1, 0] for opacity
	const opacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0]);

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
	const ref = useRef<ElementRef<"div">>(null);
	const { x, y } = useMousePosition(ref);
	mouse.x.set(x);
	mouse.y.set(y);
	// Map values from [-w/2, w/2] to [-10, 10] for transform
	const distance = {
		x: useTransform(mouse.x, [-window.innerWidth / 2, window.innerWidth / 2], [-16, 16]),
		y: useTransform(mouse.y, [-window.innerHeight / 2, window.innerHeight / 2], [-16, 16]),
	};

	return (
		<div ref={ref} className={className} {...rest}>
			<motion.div style={{ opacity: opacity }} className="relative flex select-none items-center justify-center">
				{/* Foreground */}
				<HashLink to="#about" smooth aria-label="Scroll Down" tabIndex={-1} className="relative z-10 flex">
					<div className="inline-block rounded-full border-2 border-neutral-200 hover:border-transparent">
						<BsArrowDownShort className="h-16 w-16 p-2 text-neutral-200 hover:fill-gradient" />
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
