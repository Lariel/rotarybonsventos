import styled from 'styled-components';
import colors from '@ui/styles/colors';
import talk from '@assets/talk.jpg';
import { maxWidthBreakpointMobile, maxWidthStructureDesktopLarge } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';

export const PageStyled = styled.div`
	display: flex;
	width: 100%;
	height: 800px;
	.contacts-grid {
		width: 100%;
		height: 100%;
		align-items: center;
		justify-items: center;
		display: grid;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			display: flex;
			flex-direction: column;
		}
		grid-template: "vertical-rigth first-square-left" 25%
									"vertical-rigth second-square-left" 25%
									"vertical-rigth third-square-left" 25%
									"vertical-rigth fourth-square-left" 25%
									/ 25% 75%;

		.vertical-rigth {
			grid-area: vertical-rigth;
			width: 100%;
			height: 100%;
			background-image: url(${talk});
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
			padding: 10px;
		}

		.second-square-left {
			grid-area: second-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.lavender};
			padding: 10px;
		}

		.third-square-left {
			grid-area: third-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.smoke};
			padding: 10px;
		}

		.fourth-square-left {
			grid-area: fourth-square-left;
			width: 100%;
			height: 100%;
			background-color: ${colors.ash};
			padding: 10px;
		}

		.contact-channel {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			height: 100%;
			align-items: center;
			font-size: 30px;
			font-weight: bolder;
			padding: 50px;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				padding: 10px;
				font-size: 20px;
			}
			a {
				display: flex;
				align-items: center;
				font-size: 30px;
				font-weight: bolder;
				color: ${theme.colorDefault};
				text-decoration: none;
				@media screen and (max-width: ${maxWidthBreakpointMobile}) {
					font-size: 17px;
				}
				&:hover {
					color: ${theme.hoverDefault};
					font-weight: bolder;
					transition: all .3s ease;
				}
			}
			.contact-icon {
				margin: 0 20px 0 0;
				height: 50px;
				//filter: invert(45%) sepia(100%) saturate(1000%) hue-rotate(22deg);
				@media screen and (max-width: ${maxWidthBreakpointMobile}) {
					margin: 0 5px 0 0;
					height: 30px;
				}
			}
		}

	}
`;

