import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';
import theme from '@ui/styles/theme';
import colors from '@ui/styles/colors';

export const PageStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-content: flex-start;
	background-color: ${colors.powderBlue+theme.transparencyDefault};

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		width: 100%;
		padding: 0 20px 0 20px;
	}
`;
