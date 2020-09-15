import React from 'react';

export const New = ({
	author,
	title,
	description,
	urlToImage,
	publishedAt,
}) => {
	return (
		<div className="column is-3">
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img
							src={
								urlToImage != null
									? urlToImage
									: require('./assets/not-image.png')
							}
							alt={title}
						/>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-4">{title}</p>
							<p className="subtitle is-6">{author}</p>
						</div>
					</div>

					<div className="content">
						{description}
						<br />
						<br />
						<p>
							<strong>Published: </strong>
							{publishedAt.substring(0, 10)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
