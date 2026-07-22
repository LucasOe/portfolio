import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";
import type { HTMLMotionProps } from "motion/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function ScrollIndicator({ className, ...rest }: HTMLMotionProps<"div">) {
	const [windowSize, setWindowSize] = useState({ x: 1, y: 1 });

	useEffect(() => {
		const handleResize = () => setWindowSize({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
		handleResize(); // Call immediately on mount (after hydration)
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, windowSize.y], [1, 0]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6, duration: 0.6 }}
			className={className}
			{...rest}
		>
			<motion.div
				style={{ opacity: opacity }}
				whileHover={{ scale: 1.1 }}
				className="group relative flex items-center justify-center select-none"
			>
				<Link to="." hash="about" reloadDocument aria-label="Scroll Down" tabIndex={-1} className="relative z-10 flex">
					<div className="rounded-full border-2 border-neutral-200 p-5 group-hover:border-gradient-3.5">
						<FontAwesomeIcon icon={faChevronDown} size="xl" className="text-neutral-200 group-hover:text-accent-pink" />
					</div>
				</Link>
			</motion.div>
		</motion.div>
	);
}
