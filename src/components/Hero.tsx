import { TypeAnimation } from "react-type-animation";

export default function Hero() {
	return (
		<div>
			<h1 className="m-0 text-[7vw] leading-normal md:text-[4rem] lg:text-[5rem]">Hey, I&apos;m Lucas Oelker.</h1>
			<div className="flex text-[7vw] leading-normal md:text-[4rem] lg:text-[5rem]">
				<span>I&apos;m a&nbsp;</span>
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
					wrapper="div"
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
