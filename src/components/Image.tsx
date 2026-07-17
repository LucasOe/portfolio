import { twMerge } from "tailwind-merge";

export interface ImageProps extends React.ComponentProps<"img"> {
	src: string;
	alt: string;
}

export default function Image({ src, alt, className, ...rest }: ImageProps) {
	return (
		<div className="mb-4 flex flex-col">
			<button type="button" className="cursor-pointer p-2">
				<img src={src} alt={alt} className={twMerge("border-gradient-3 rounded-md border-2", className)} {...rest} />
			</button>
			<span className="px-2 leading-6">{alt}</span>
		</div>
	);
}
