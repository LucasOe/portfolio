import { Dialog } from "@base-ui/react/dialog";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export interface ImageProps extends React.ComponentProps<"img"> {
	src: string;
	alt: string;
	showAlt?: false;
}

export default function Image({ src, alt, showAlt, ...rest }: ImageProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="mb-4 flex flex-col">
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<Dialog.Trigger className="p-2">
					<img src={src} alt={alt} className="border-gradient-3 rounded-md border-2" {...rest} />
				</Dialog.Trigger>

				<AnimatePresence>
					{open && (
						<Dialog.Portal>
							<Dialog.Backdrop
								render={
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="fixed inset-0 z-50 min-h-dvh bg-black/20 supports-backdrop-filter:backdrop-blur-xs"
									/>
								}
							/>
							<Dialog.Viewport className="fixed inset-0 z-50 grid place-items-center">
								<Dialog.Popup
									render={
										<motion.div
											initial={{ scale: 0.8 }}
											animate={{ scale: 1.0 }}
											className="pointer-events-none flex items-center"
										>
											<div className="pointer-events-auto relative border-gradient-3 box-content size-full overflow-hidden rounded-xl">
												<img src={src} alt={alt} className="max-h-[80dvh] max-w-[80dvw]" {...rest} />
												<Dialog.Close className="absolute top-0 right-0 m-2" aria-label="Close">
													<div className="flex rounded-full bg-primary/80 p-2 hover:bg-primary/60">
														<FontAwesomeIcon icon={faX} size="1x" />
													</div>
												</Dialog.Close>
											</div>
										</motion.div>
									}
								/>
							</Dialog.Viewport>
						</Dialog.Portal>
					)}
				</AnimatePresence>
			</Dialog.Root>
			{showAlt && <span className="px-2 leading-6">{alt}</span>}
		</div>
	);
}
