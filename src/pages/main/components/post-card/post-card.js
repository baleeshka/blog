import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const PostCardContainer = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id=" fa-calendar-o"
								margin="0 6px 0 0"
								size="16px"
								inactive={true}
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id=" fa-comment-o"
								margin="0 6px 0 0"
								size="16px"
								inactive={true}
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	width: 282px;
	display: flex;
	flex-direction: column;
	margin: 19px;
	border: 1px solid rgba(255, 255, 255, 0.81);

	& .img {
		display: block;
		width: 100%;
		height: 100%;
	}

	& h4 {
		margin: 0;
	}

	& .post-card-footer {
		border-top: 1px solid rgba(255, 255, 255, 0.81);
		padding: 5px;
	}

	& .post-card-info {
		display: flex;
		padding: 5px;
		justify-content: space-between;
		margin-top: 5px;
	}

	& .published-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`;
