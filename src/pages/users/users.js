import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ROLE } from '../../bff/constants';
import { Content, H2 } from '../../components';
import { useServerRequest } from '../../hooks';
import { TableRow, UserRow } from './components';

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);

	const requestServer = useServerRequest();

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setRoles(rolesRes.res);
				setUsers(usersRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	margin: 0 auto;
	flex-direction: column;
	width: 570px;
	font-size: 18px;
	& .table-header {
		display: flex;
		justify-content: center;
	}
`;
