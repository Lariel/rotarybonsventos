import styled from 'styled-components';
import {
	maxWidthBreakpointDesktopFHD,
	maxWidthBreakpointDesktopWXGA,
	maxWidthBreakpointMobile
} from '@ui/styles/GlobalStyles';
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

	.carousel-item {

		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			opacity: 1;
			display: flex;
			justify-content: center;
		}
	}

	.carousel-item.highlight {
		transform: scale(1.2);
		z-index: 100;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			opacity: 1;
			transform: scale(1);
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

	.btn-prev {
		background: transparent;
		background-size: 72px 31px;
		border: none;
		transition: all .3s ease;
		width: 23.3rem;
		height: 7.1rem;
		display: block;
		top: 48.4%;
		appearance: none;
		position: absolute;
		overflow: hidden;
		transform: rotate(-90deg);
		left: 22.5%;
		&:hover {
			background-color: rgba(0, 0, 0, .05);
			background-position: 50% 40%;
		}
		@media screen and (max-width: ${maxWidthBreakpointDesktopFHD}) {
			left: 13.4%;
		}
		@media screen and (max-width: ${maxWidthBreakpointDesktopWXGA}) {
			left: 1%;
			top: 72%;
		}
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			display: none;
		}
	}

	.btn-next {
		background: transparent;
		background-size: 72px 31px;
		border: none;
		transition: all .3s ease;
		width: 23.3rem;
		height: 7.1rem;
		display: block;
		top: 48.4%;
		appearance: none;
		position: absolute;
		overflow: hidden;
		transform: rotate(90deg);
		right: 22.5%;
		&:hover {
			background-color: rgba(0, 0, 0, .05);
			background-position: 50% 40%;
		}
		@media screen and (max-width: ${maxWidthBreakpointDesktopFHD}) {
			right: 13.2%;
		}
		@media screen and (max-width: ${maxWidthBreakpointDesktopWXGA}) {
			right: 0.5%;
			top: 72%;
		}
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			display: none;
		}
	}

`;
