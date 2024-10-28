import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';

export const PageStyled = styled.div`
	width: 100%;

	section {
		padding: 20px;
	}

	.about {
		background-color: ${colors.taupe};
	}

	.news {
		background-color: ${colors.platinum};
	}

	.actions {
		background-color: ${colors.lavender};
	}

	.section-title {
		display: flex;
		width: 100%;
		padding: 20px 0 20px 0;
	}

	.section-content {
		height: 450px;
		background-color: ${colors.white};
	}

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		padding: 0 20px 0 20px;
	}
`;
