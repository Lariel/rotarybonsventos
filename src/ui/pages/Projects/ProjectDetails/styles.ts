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
	img {
		width: 100%;
		margin: 10px 0 20px 0;
		transition: all 1s ease;
		&:hover {
			transform: scale(1.01);
			transition: all 1s ease;
		}
	}
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}
`;
