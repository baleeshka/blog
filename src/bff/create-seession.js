import { ROLE } from './constants/roleId';
import { removeComment } from './session';

export const createSession = (roleId) => {
	const session = {};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
		//Ничего не делать
	}
	return session;
};
