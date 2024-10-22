import styled from 'styled-components';
import { breakpointDesktop, fadeInOpacity } from '@ui/styles/GlobalStyles';
import colors from '@ui/styles/colors';

export const ContributeStyled = styled.div`
	animation: ${fadeInOpacity} 0.3s forwards;

	a {
		&:hover, &:focus {
			color: ${colors.rotaryGold};
			font-weight: bold;
			transition: all .3s ease;
		}
	}

	ul {
		margin-left: 70px;
		@media screen and (max-width: ${breakpointDesktop}) {
			margin-left: 30px;
		}
		li {
			font-size: 1.1em;
			line-height: 2em;
		}
	}
`;

export const HowDonateGridStyled = styled.div`
	display: grid;
	margin: 0 180px 40px 300px;
	align-items: start;
	justify-items: center;
	grid-template-columns: repeat(2, 1fr);
	.grid-how-donate {
		width: 110%;
	}
	.grid-qr-donate {
		width: 50%;
	}

	@media screen and (max-width: ${breakpointDesktop}) {
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
