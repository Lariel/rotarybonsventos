import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';
import theme from '@ui/styles/theme';

export const PageStyled = styled.div`
	width: 100%;

	section {
		padding: 20px;
	}

	.about {
		//background-color: ${colors.taupe};
		//background-color: ${colors.white};
		background-color: ${theme.contentBGDefault};
	}

	.news {
		//background-color: ${colors.platinum};
		//background-color: ${colors.white};
		background-color: ${theme.contentBGDefault};
	}

	.actions {
		//background-color: ${colors.lavender};
		//background-color: ${colors.white};
		background-color: ${theme.contentBGDefault};
	}

	.section-title {
		display: flex;
		width: 100%;
		padding: 20px 0 20px 0;
	}

	.section-content {
		background-color: ${colors.white};
		height: 450px;
	}

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}
`;
