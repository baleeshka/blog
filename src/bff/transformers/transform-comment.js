export const transformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	authorId: dbComment.post_id,
	content: dbComment.content,
	publishedAt: dbComment.published_at,
});
