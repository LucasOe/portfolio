import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { twMerge } from "tailwind-merge";

export type HeroProps = React.ComponentProps<"div">;

export default function Hero({ className, ...rest }: HeroProps) {
	return (
		<div
			className={twMerge(
				"text-[7vw] leading-normal text-neutral-50 select-none md:text-[4rem] lg:text-[4.8rem]",
				className
			)}
			{...rest}
		>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="font-bold"
			>
				Hey, I’m Lucas Oelker.
			</motion.p>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.6 }}
				className="font-normal"
			>
				{"I’m a "}
				<TypeAnimation
					sequence={[
						"programmer.",
						2000,
						"designer.",
						2000,
						"nerd.",
						2000,
						"perfectionist.",
						2000,
						"student.",
						2000,
					]}
					wrapper="span"
					cursor
					repeat={Number.POSITIVE_INFINITY}
					speed={1}
					deletionSpeed={20}
					className="bg-accent-violet from-accent-pink inline-block bg-gradient-to-bl bg-cover bg-clip-text text-transparent after:text-neutral-50"
				/>
			</motion.p>
		</div>
	);
}
