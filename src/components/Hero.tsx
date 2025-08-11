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
			<p className="font-bold">Hey, I’m Lucas Oelker.</p>
			<p className="font-normal">
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
			</p>
		</div>
	);
}
