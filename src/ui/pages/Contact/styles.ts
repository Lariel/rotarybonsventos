import styled from 'styled-components';
import colors from '@ui/styles/colors';
import talk from '@assets/talk.jpg';
import { breakpointDesktop } from '@ui/styles/GlobalStyles';

export const ContactPageStyled = styled.div`
	display: flex;
	width: 100%;
	height: 800px;
	.contacts-grid {
		width: 100%;
		height: 100%;
		align-items: center;
		justify-items: center;
		background-color: ${colors.white};
		display: grid;
		@media screen and (max-width: ${breakpointDesktop}) {
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
			@media screen and (max-width: ${breakpointDesktop}) {
				display: none;
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
			justify-content: center;
			align-items: center;
			background-color: ${colors.white};
			width: 100%;
			height: 100%;
		}

	}
`;

