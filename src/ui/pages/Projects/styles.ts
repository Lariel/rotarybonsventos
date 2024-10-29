import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import colors from '@ui/styles/colors';
import styled from 'styled-components';

export const PageStyled = styled.div`
	background-color: ${colors.taupe+theme.transparencyDefault};
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-content: flex-start;
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}
`;
