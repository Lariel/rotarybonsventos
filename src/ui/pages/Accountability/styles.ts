import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import styled from 'styled-components';

export const PageStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-content: flex-start;
	background-color: ${theme.contentBGDefault};

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		width: 100%;
		padding: 0 20px 0 20px;
	}
`;
