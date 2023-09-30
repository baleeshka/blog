import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid rgba(255, 255, 255, 0.81);' : 'none')}
		& > div {
		display: flex;
		padding: 10px;
	}
	& .login-column {
		width: 172px;
	}
	& .registered-at-column {
		width: 213px;
	}
	& .role-column {
		width: auto;
	}
`;
