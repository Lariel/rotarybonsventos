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
		display: flex;
		flex-direction: column;
		width: 100%;
    height: 50%;

		.footer-contact {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.footer-contact-us {
				display: flex;
				padding: 15px 0 15px 0;
		//		flex-direction: column;
				//align-items: center;
				justify-content: center;
				width: 100%;
				font-size: 20px;
				font-weight: bolder;
				color: ${colors.white};
			}

			.footer-contact-icons {
				display: flex;
				flex-direction: row;
				//align-items: center;
				//width: 100%;
				justify-content: center;
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
				position: absolute;
				right: 0;
				img {
						height: 60px;
				}
			}
		}
	}
`;

