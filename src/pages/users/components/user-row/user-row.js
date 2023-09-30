import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';
import { TableRow } from '../table-row/table-row';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id=" fa-floppy-o"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onClick={() => onRoleSave(id, selectedRoleId)}
					/>
				</div>
			</TableRow>
			<Icon id=" fa-trash-o" margin="10px 0 0 5px" onClick={onUserRemove} />
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& select {
		font-size: 16px;
		background-color: rgb(25, 25, 25);
		box-shadow: inset 20px 20px 0px 20px rgb(25, 25, 25);
		color: rgba(255, 255, 255, 0.81);
		border: 1px solid rgba(255, 255, 255, 0.81);
		padding: 0 5px;
	}
`;
