interface Props {
	title: string;
	url: string;
	description: string;
	imageLink: string;
	clicked: boolean;
	onClick: () => void;
}

function TuileEscapeGame({title, url, imageLink, clicked, onClick, description}: Props) {
	return (
		<div className="fr-tile" id="tile-0"
			style={{border: clicked ? "2px solid white" : undefined}}
			onClick={onClick}
		>
			<div className="fr-tile__body">
				<div className="fr-tile__content">
					<h3 className="fr-tile__title">
						<a href={url} target="_blank">{title}</a>
						<p className="fr-text--sm" style={{paddingTop: 8}}>{description}</p>
					</h3>
				</div>
			</div>
			<div className="fr-tile__header">
					<img src={imageLink}
							style={{
								width: "100%",
								height: "310px",
								objectFit: "cover",
								borderRadius: "16px",
							}}
					/>
			</div>
		</div>
	)
}

export default TuileEscapeGame;
