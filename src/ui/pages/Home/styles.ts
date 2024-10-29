import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';
import theme from '@ui/styles/theme';

export const PageStyled = styled.div`
	width: 100%;

	section {
		padding: 20px;
		overflow: hidden;
	}

	.about {
		//background-color: ${colors.taupe};
		//background-color: ${colors.white};
		//background-color: ${theme.contentBGDefault};
		height: 350px;
	}

	.news {
		//background-color: ${colors.platinum};
		//background-color: ${colors.white};
		//background-color: ${theme.contentBGDefault};
		height: 750px;
	}

	.actions {
		//background-color: ${colors.lavender};
		//background-color: ${colors.white};
		//background-color: ${theme.contentBGDefault};
		height: 550px;
	}

	.section-title {
		padding: 20px 0 20px 0;
		display: flex;
		justify-content: center;
		width: 100%;
		h1 {
			font-weight: 300;
		}
	}

	.section-content {
		padding: 20px;
		display: flex;
		width: 100%;
		background-color: ${theme.contentBGDefault};
		height: 100%;
	}

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}
`;
