import { styled } from 'styled-components';
import { H2 } from '../h2/h2';

const Div = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Content = ({ children, error }) =>
	error ? (
		<>
			<H2>Ошибка</H2>
			<Div>{error}</Div>
		</>
	) : (
		children
	);
