import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';
import styled from 'styled-components';

export const FooterContainerStyled = styled.div`
	background-color: ${theme.colorDefault};
	height: 183px;
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		height: 150px;
	}
`;

export const FooterContentStyled = styled.div`
	flex-direction: column;
	justify-content: center;

	.footer-superior {
		display: flex;
		width: 100%;
		height: 50%;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			height: 30%;
		}
		align-items: center;
		a {
			font-size: 20px;
			font-weight: bolder;
			color: ${colors.white};
			text-decoration: none;
		}
		img {
			margin-left: 10px;
		}
		border-bottom: 2px solid ${colors.powderBlue};
	}

	.footer-inferior {
		display: grid;
		grid-template: 50px / 2fr 3fr;
		grid-template-areas: 	"footer-contact-us footer-contact-us footer-logo"
													"footer-contact-icons footer-contact-icons footer-logo";
		align-items: center;
		justify-items: center;
		width: 100%;
    height: 50%;

		.footer-contact-us {
			grid-area: footer-contact-us;
			padding: 15px 0 15px 130px;
			font-size: 20px;
			font-weight: bolder;
			color: ${colors.white};
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				padding: 0 0 0 90px;
			}
		}

		.footer-contact-icons {
			grid-area: footer-contact-icons;
			padding: 0 0 0 140px;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				padding: 0 0 0 100px;
			}

			.footer-instagram-icon {
				margin: 0 20px 10px 0;
				height: 20px;
			}

			.footer-linkedin-icon {
				margin: 0 0 10px 0;
				height: 20px;
			}

			.footer-email-icon {
				margin: 0 0 10px 20px;
				height: 25px;
			}
		}

		.footer-logo {
			grid-area: footer-logo;
			img {
					height: 60px;
			}
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				img {
					height: 40px;
				}
			}
		}
	}
`;

