type ProjectProps = {
	title: string;
	className?: string;
};

export default function Project({ title, className }: ProjectProps) {
	return (
		<div className={className}>
			<div className="rounded-md bg-neutral-700 p-4">
				<h3 className="m-0 mb-2">{title}</h3>
				<p className="m-0">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempore fuga ea, iste inventore
					deserunt incidunt repudiandae, debitis veritatis neque non, aliquid laudantium distinctio labore
					architecto voluptas odio cupiditate reprehenderit.
				</p>
			</div>
		</div>
	);
}
