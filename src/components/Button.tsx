import { twMerge } from "tailwind-merge";

export type ButtonProps = React.ComponentProps<"button"> & {
	children: React.ReactNode;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			type="button"
			className={twMerge(
				"focus outline-hidden inline-block rounded-lg bg-neutral-300 px-5 py-1 font-medium text-neutral-900 no-underline hover:bg-neutral-100",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
