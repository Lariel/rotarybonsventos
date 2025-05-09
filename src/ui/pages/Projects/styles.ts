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

	.text-content {
		padding: 0 10em 0 10em;
		text-align: left;
		font-weight: 400;
    strong {
			font-size: 1.0em;
		}
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			padding: 0 0.2em 0 0.7em;
			p {
				text-indent: 3%;
			}
		}
	}
`;
