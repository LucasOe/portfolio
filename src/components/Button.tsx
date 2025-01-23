import { twMerge } from "tailwind-merge";

export type ButtonProps = React.ComponentProps<"button"> & {
	children: React.ReactNode;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			type="button"
			className={twMerge(
				"not-prose focus inline-block rounded-lg bg-neutral-300 p-1 px-5 font-medium text-neutral-900 no-underline outline-none hover:bg-neutral-100",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
