import { motion, useScroll, useTransform } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { BsArrowDownShort } from "react-icons/bs";

export default function ScrollIndicator({ className }: React.ComponentProps<"div">) {
	const { scrollY } = useScroll();
	// Map values from [0, 500] to [1, 0]
	const opacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0]);
	return (
		<motion.div style={{ opacity: opacity }} className={className}>
			<HashLink to="#about" smooth aria-label="Scroll Down" tabIndex={-1}>
				<div className="m-2 animate-bounce rounded-full bg-white/50 hover:bg-white/75">
					<BsArrowDownShort className="h-12 w-12 text-neutral-800" />
				</div>
			</HashLink>
		</motion.div>
	);
}
