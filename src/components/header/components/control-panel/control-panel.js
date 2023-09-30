import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../../../actions/logout';
import { Button, Icon } from '../../../../components';
import { ROLE } from '../../../../constants/roleId';
import {
	selectUserLogin,
	selectUserRole,
	selectUserSession,
} from '../../../../selectors';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 32px;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>{' '}
						<Icon
							id=" fa-sign-out"
							margin="0 0 0 15px"
							onClick={() => dispatch(logout(session))}
						/>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-chevron-left"
					margin="10px 7px 0 0"
					onClick={() => navigate(-1)}
				/>

				<Link to="/post">
					<Icon id="fa-newspaper-o" margin="10px 4px 0 15px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 15px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
