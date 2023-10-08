import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className="special-panel">
			<div className="published-at">
				<Icon id=" fa-calendar-o" margin="0 6px 0 0" size="16px" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id=" fa-trash-o" margin="0 0 0 10px" size="21px" />
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
