import { Dialog } from "@base-ui/react/dialog";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ImageProps extends React.ComponentProps<"img"> {
	src: string;
	alt: string;
}

export default function Image({ src, alt, ...rest }: ImageProps) {
	return (
		<div className="mb-4 flex flex-col">
			<Dialog.Root>
				<Dialog.Trigger className="p-2">
					<img src={src} alt={alt} className="border-gradient-3 rounded-md border-2" {...rest} />
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/20 supports-backdrop-filter:backdrop-blur-xs" />
					<Dialog.Viewport className="fixed inset-0 z-50 grid place-items-center">
						<Dialog.Popup className="h-full max-h-[80dvh] max-w-[80dvw] flex items-center pointer-events-none">
							<div className="size-max block relative border-gradient-3 rounded-xl overflow-hidden pointer-events-auto">
								<img src={src} alt={alt} className="flex size-full max-h-full max-w-full object-contain" {...rest} />
								<Dialog.Close className="absolute top-0 right-0 m-2" aria-label="Close">
									<div className="flex rounded-full bg-primary/80 p-2 hover:bg-primary/60">
										<FontAwesomeIcon icon={faX} size="1x" />
									</div>
								</Dialog.Close>
							</div>
						</Dialog.Popup>
					</Dialog.Viewport>
				</Dialog.Portal>
			</Dialog.Root>
			<span className="px-2 leading-6">{alt}</span>
		</div>
	);
}
