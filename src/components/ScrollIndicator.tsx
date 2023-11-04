import { motion, useScroll, useTransform } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { BsArrowDownShort } from "react-icons/bs";

export type ScrollIndicatorProps = React.ComponentProps<typeof motion.div>;

export default function ScrollIndicator({ className, ...rest }: ScrollIndicatorProps) {
	const { scrollY } = useScroll();
	// Map values from [0, h/2] to [1, 0] for opacity
	const opacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0]);

	return (
		<motion.div style={{ opacity: opacity }} className={className} {...rest}>
			<HashLink to="#about" smooth aria-label="Scroll Down" tabIndex={-1}>
				<div className="m-2 animate-bounce rounded-full bg-white/50 hover:bg-white/75">
					<BsArrowDownShort className="h-12 w-12 text-primary" />
				</div>
			</HashLink>
		</motion.div>
	);
}
