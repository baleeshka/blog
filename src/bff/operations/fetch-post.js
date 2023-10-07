import { getComments, getPost, getUsers } from '../api';

export const fetchPost = async (postId) => {
	const post = await getPost([postId]);

	const users = await getUsers();

	const comments = await getComments(postId);

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});

	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	};
};