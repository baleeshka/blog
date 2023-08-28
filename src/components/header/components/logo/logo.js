import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 54px;
`;

const SmallText = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-ravelry" size="70px" margin="0 10px 0 0" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>Азиатской культуры</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -21px;
`;
