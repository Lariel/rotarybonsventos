import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';
import theme from '@ui/styles/theme';
import contribute from '@assets/contribute.jpg';
import education from '@assets/education.jpg';
import development from '@assets/development.jpg';
import nature from '@assets/nature.jpg';

export const PageStyled = styled.div`
	width: 100%;

	section {
		padding: 20px;
		overflow: hidden;
	}

	.about {
		//background-color: ${colors.taupe};
		//background-color: ${colors.white};
		background-color: ${theme.contentBGDefault};
		height: 1600px;
	}

	.news {
		//background-color: ${colors.platinum};
		//background-color: ${colors.white};
		background-color: ${theme.contentBGDefault};
		height: 750px;
	}

	.actions {
		//background-color: ${colors.lavender};
		//background-color: ${colors.white};
		background-color: ${theme.contentBGDefault};
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
		flex-direction: column;
		width: 100%;
		//background-color: ${theme.contentBGDefault};
	}

	.round-topic {
		border-radius: 50%;
		width: 350px;
		height: 350px;
		background-position-x: 50%;
		background-position-y: 45%;
		background-size: cover;
		transition: all 1s ease;
		&:hover {
			transform: scale(1.05);
			transition: all 1s ease;
		}
	}

	.square-topic {
		width: 100%;
		height: 350px;
		background-position-y: 20%;
		background-size: cover;
		transition: all 1s ease;
		&:hover {
			transform: scale(1.05);
			transition: all 1s ease;
		}
	}

	.first-topic {
		background-image: url(${contribute});
	}

	.second-topic {
		background-image: url(${education});
	}

	.third-topic {
		background-image: url(${development});
	}

	.fourth-topic {
		background-image: url(${nature});
	}
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}
`;
