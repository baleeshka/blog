import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../actions';
import { Icon } from '../../../../../components';
import { useServerRequest } from '../../../../../hooks';

const CommentContainer = ({ className, author, content, publishedAt, id, postId }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id=" fa-user-circle-o"
							margin="0 6px 0 0"
							size="18px"
							inactive={true}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							id=" fa-calendar-o"
							margin="0 6px 0 0"
							size="18px"
							inactive={true}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id=" fa-trash-o"
				margin="0 0 0 10px"
				size="21px"
				onClick={() => onCommentRemove(id)}
			/>
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
