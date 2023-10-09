import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { Icon } from '../../../../components';
import { useServerRequest } from '../../../../hooks';

const SpecialPanelContainer = ({ className, publishedAt, editButton, id }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = () => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate(`/`),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						id=" fa-calendar-o"
						margin="0 6px 0 0"
						size="16px"
						inactive={true}
					/>
				)}
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{publishedAt && (
					<Icon
						id=" fa-trash-o"
						margin="0 0 0 10px"
						size="21px"
						onClick={onPostRemove}
					/>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	& .published-at {
		display: flex;
		font-size: 18px;
	}
	& .buttons {
		display: flex;
	}
`;
