import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';

export const PageStyled = styled.div`
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		padding: 0 20px 0 20px;
	}
`;
