import { TypeAnimation } from "react-type-animation";

type HeroProps = {
	className?: string;
};

export default function Hero({ className }: HeroProps) {
	return (
		<div className={`${className} select-none text-[7vw] leading-normal md:text-[4rem] lg:text-[5rem]`}>
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
					repeat={Infinity}
					speed={1}
					deletionSpeed={20}
					className="text-green-400 after:text-white"
				/>
			</p>
		</div>
	);
}
