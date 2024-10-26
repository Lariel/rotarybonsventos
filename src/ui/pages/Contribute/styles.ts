import styled from 'styled-components';
import { maxWidthBreakpointMobile, maxWidthStructureDesktopLarge } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import contribute from '@assets/contribute.jpg';
import colors from '@ui/styles/colors';

export const PageStyled = styled.div`
	a {
		&:hover, &:focus {
			color: ${theme.defaultHover};
			font-weight: bold;
			transition: all .3s ease;
		}
	}

	ul {
		margin-left: 70px;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			margin-left: 30px;
		}
		li {
			font-size: 1.1em;
			line-height: 2em;
		}
	}

	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		//padding: 0 20px 0 20px;
	}

	display: flex;
	width: 100%;
	height: 800px;
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
		grid-template: "col-rigth first-square-left" 50%
		"col-rigth second-square-left" 50%
		/ 25% 75%;

		.col-rigth {
			grid-area: col-rigth;
			width: 100%;
			height: 100%;
			background-image: url(${contribute});
			background-position-x: 45%;
			background-position-y: 10%;
			background-size: cover;
			@media screen and (max-width: ${maxWidthStructureDesktopLarge}) {
				background-position-x: 50%;
				background-position-y: 10%;
				background-size: cover;
			}
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				display: none;
			}
			&:hover {
				background-position-x: 43%;
				transition: all .3s ease;
			}
		}

		.first-square-left {
			grid-area: first-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.moss};
			padding: 20px;
		}

		.second-square-left {
			grid-area: second-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.lavender};
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
