import styled from 'styled-components';
import {
	onFocus,
	focusIn,
	focusOut,
	maxWidthBreakpointMobile
} from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import about from '@assets/about-us.jpg';
import story1 from '@assets/story-1.jpg';
import action from '@assets/action.jpg';
import foundation from '@assets/foundation.jpg';

export const PageStyled = styled.div`
	width: 100%;

	section {
		padding: 20px;
		overflow: hidden;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			padding: 0;
		}
	}

	.actions {
		background-color: ${theme.contentBGDefault};
		height: 500px;

		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			height: auto;
		}
	}

	.about {
		background-color: ${theme.contentBGDefault};
	}

	.news {
		background-color: ${theme.contentBGDefault};
		height: 750px;
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
		overflow: hidden;
	}

	.small-topic {
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
			border-radius: 0;
		}
	}

	.whide-topic {
		width: 100%;
		height: 400px;
		background-position-y: 20%;
		background-size: cover;
		transition: all 1s ease;
		&:hover {
			transform: scale(1.05);
			transition: all 1s ease;
		}
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			height: 180px;
		}
	}

	.first-topic {
		background-image: url(${about});
	}

	.second-topic {
		background-image: url(${story1});
	}

	.third-topic {
		background-image: url(${action});
	}

	.fourth-topic {
		background-image: url(${foundation});
	}

	.carousel {
		width: 100%;

		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			flex-direction: column;
		}
	}

	.carousel-itens {
		width: 70%;
		height: 430px;
		display: flex;
		overflow: hidden;
		align-items: center;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			width: 100%;
			height: auto;
		}
	}

	ul li:nth-child(2) {
		animation: ${focusOut} 0.4s forwards;
	}

	ul li:nth-child(4) {
		animation: ${focusIn} 0.6s forwards;
	}

	.carousel-item {
		list-style: none;

		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			opacity: 1;
			display: flex;
			justify-content: center;
		}
	}

	.carousel-item.highlight {
		transform: scale(1.2);
		z-index: 100;
		animation: ${onFocus} 0.5s forwards;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			opacity: 1;
			transform: scale(1);
			animation: none;
		}
	}

	.carousel-item.suppressed {
		transform: scale(1);
		opacity: 0.7;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			opacity: 1;
			transform: scale(1);
			z-index: 100;
		}
	}
`;
