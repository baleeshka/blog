import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { loadPostAsync } from '../../actions/load-post-async';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
import { Comments, PostContent, PostForm } from './components';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);
	return (
		<div className={className}>
			{isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40 px;
	padding: 40px 80px;
`;
