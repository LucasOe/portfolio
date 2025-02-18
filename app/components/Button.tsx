import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ComponentProps<"button"> {
	children: React.ReactNode;
	outline?: boolean;
}

export default function Button({ children, outline, className, ...rest }: ButtonProps) {
	return (
		<button
			type="button"
			data-outline={outline}
			className={twMerge(
				"focus data-[outline=true]:border-gradient-3 cursor-pointer rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-900 no-underline outline-hidden hover:bg-neutral-100 data-[outline=false]:border-3 data-[outline=false]:border-neutral-300 data-[outline=false]:bg-transparent data-[outline=false]:text-neutral-300 data-[outline=false]:hover:border-neutral-100 data-[outline=false]:hover:bg-neutral-300/10 data-[outline=false]:hover:text-neutral-100 data-[outline=true]:bg-neutral-100",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
