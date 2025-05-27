import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import styled from 'styled-components';

export const PageStyled = styled.div`
	background-color: ${theme.contentBGDefault};
	padding: 0 20px 0 20px;
	display: flex;
	width: 100%;
	min-height: 100%;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-content: flex-start;
	.project-image-wrapper {
		margin: 10px 0 20px 0;
		img {
			width: 100%;
		}
	}
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}
`;
