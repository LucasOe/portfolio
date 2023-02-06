import { TypeAnimation } from "react-type-animation";

export default function Hero() {
	return (
		<div className="not-prose select-none text-[7vw] leading-normal md:text-[4rem] lg:text-[5rem]">
			<h1 className="m-0 font-bold">Hey, I’m Lucas Oelker.</h1>
			<div className="inline">
				<span className="whitespace-pre-wrap">{"I’m a "}</span>
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
			</div>
		</div>
	);
}
