import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import styled from 'styled-components';

export const PageStyled = styled.div`
	background-color: ${theme.contentBGDefault};
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
