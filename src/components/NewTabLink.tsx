type NewTabLink = {
	link: string;
	text: string;
};

export default function Social({ link, text }: NewTabLink) {
	return (
		<div className="inline">
			&nbsp;
			<a href={link} target="_blank" rel="noreferrer">
				{text}
			</a>
			&nbsp;
		</div>
	);
}
