import styled from 'styled-components';
import { maxWidthBreakpointMobile, maxWidthStructureDesktopLarge } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import colors from '@ui/styles/colors';
import contribute from '@assets/contribute.jpg';

export const PageStyled = styled.div`
	a {
		&:hover, &:focus {
			color: ${theme.hoverDefault};
			font-weight: bold;
			transition: all .3s ease;
		}
	}

	ul {
		margin: 0 0 20px 70px;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			margin-left: 30px;
		}
		li {
			font-size: 1.1em;
			line-height: 2em;
		}
	}


	display: flex;
	width: 100%;
	height: 750px;
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		height: auto;
	}
	.page-grid {
		width: 100%;
		height: 100%;
		align-items: center;
		justify-items: center;
		display: grid;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			display: flex;
			flex-direction: column;
		}
		grid-template: "col-rigth first-square-left" 55%
		"col-rigth second-square-left" 45%
		/ 25% 75%;

		.col-rigth {
			grid-area: col-rigth;
			width: 100%;
			height: 100%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				display: none;
			}
			.banner-rigth {
				width: 100%;
				height: 100%;
				background-image: url(${contribute});
				background-position-x: 45%;
				background-position-y: 10%;
				background-size: cover;
				transition: all 1s ease;
				&:hover {
					transform: scale(1.05);
					transition: all 1s ease;
				}
				@media screen and (max-width: ${maxWidthStructureDesktopLarge}) {
					background-position-x: 50%;
					background-position-y: 10%;
					background-size: cover;
				}
			}
		}

		.first-square-left {
			grid-area: first-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.moss+theme.transparencyDefault};
			padding: 20px;
			h1 {
				padding: 20px;
				@media screen and (max-width: ${maxWidthBreakpointMobile}) {
					padding: 10px;
				}
			}
		}

		.second-square-left {
			grid-area: second-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.lavender+theme.transparencyDefault};
			padding: 20px;
		}
	}
`;

export const HowDonateGridStyled = styled.div`
	display: grid;
	margin: 20px 80px 0 80px;
	align-items: start;
	justify-items: center;
	grid-template-columns: repeat(2, 1fr);
	.grid-how-donate {
		width: 110%;
	}
	.grid-qr-donate {
		width: 50%;
	}

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		display: flex;
		margin: 0 0 40px 0;
		flex-direction: column;
		.grid-how-donate {
			width: 100%;
		}
		.grid-qr-donate {
			width: 100%;
		}
	}
`;
