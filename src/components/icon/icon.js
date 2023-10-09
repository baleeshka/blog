import styled from 'styled-components';

const IconContainer = ({ className, id, inactive, disabled, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id} `} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '20px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	&& {
		color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
	}

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	}
	&:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	}
`;
