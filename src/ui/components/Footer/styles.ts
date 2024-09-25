import colors from '@ui/styles/colors';
import styled from 'styled-components';

export const FooterContainerStyled = styled.div`
	background-color: ${colors.azure};
	height: 183px;
`;

export const FooterContentStyled = styled.div`
	flex-direction: column;
	justify-content: center;

	.footer-superior {
		display: flex;
		width: 100%;
		height: 50%;
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
		grid-template: 50px / 1fr 3fr;
		grid-template-areas: 	"footer-contact-us footer-contact-us footer-logo"
													"footer-contact-icons footer-contact-icons footer-logo";
		align-items: center;
		justify-items: center;
		width: 100%;
    height: 50%;

		.footer-contact-us {
			grid-area: footer-contact-us;
			padding: 15px 0 15px 0;
			font-size: 20px;
			font-weight: bolder;
			color: ${colors.white};
		}

		.footer-contact-icons {
			grid-area: footer-contact-icons;
			img {
				height: 20px;
				&:first-of-type {
					margin-right: 20px;
				}
				&:last-of-type {
					margin-left: 20px;
				}
			}
		}

		.footer-logo {
			grid-area: footer-logo;
			img {
					height: 60px;
			}
		}
	}
`;

