import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.81);
	border-radius: 6px;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	background-color: rgb(25, 25, 25);
	color: rgba(255, 255, 255, 0.81);
	cursor: pointer;
`;
