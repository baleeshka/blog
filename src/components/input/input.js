import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	margin: 0 0 10px;
	padding: 10px;
	border: 1px solid rgba(255, 255, 255, 0.81);
	font-size: 18px;
	background-color: rgb(25, 25, 25);
	box-shadow: inset 20px 20px 0px 20px rgb(25, 25, 25);
	color: rgba(255, 255, 255, 0.81);
`;
