import { TypeAnimation } from "react-type-animation";
import { twMerge } from "tailwind-merge";

export type HeroProps = React.ComponentProps<"div">;

export default function Hero({ className, ...rest }: HeroProps) {
	return (
		<div
			className={twMerge(
				"select-none text-[7vw] leading-normal text-neutral-50 md:text-[4rem] lg:text-[5rem]",
				className
			)}
			{...rest}
		>
			<p className="m-0 font-bold">Hey, I’m Lucas Oelker.</p>
			<p className="m-0 font-normal">
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
					cursor={true}
					repeat={Number.POSITIVE_INFINITY}
					speed={1}
					deletionSpeed={20}
					className="inline-block bg-accent-violet bg-gradient-to-bl from-accent-pink bg-cover bg-clip-text text-transparent after:text-neutral-50"
				/>
			</p>
		</div>
	);
}
