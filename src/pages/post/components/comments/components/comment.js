import styled from 'styled-components';
import { Icon } from '../../../../../components';

const CommentContainer = ({ className, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id=" fa-user-circle-o" margin="0 6px 0 0" size="18px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id=" fa-calendar-o" margin="0 6px 0 0" size="18px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon id=" fa-trash-o" margin="0 0 0 10px" size="21px" />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;
	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid rgba(255, 255, 255, 0.81);
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
