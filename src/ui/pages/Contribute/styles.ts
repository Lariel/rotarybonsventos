import styled from 'styled-components';
import { breakpointDesktop, fadeInOpacity } from '@ui/styles/GlobalStyles';
import colors from '@ui/styles/colors';

export const ContributeStyled = styled.div`
	animation: ${fadeInOpacity} 0.3s forwards;

	p {
		/* &:first-of-type {
			font-size: 1.4rem;
		} */
		font-size: 1.2rem;
		line-height: 2em;
	}

	a {
		&:hover, &:focus {
			color: ${colors.rotaryGold};
			font-weight: bold;
			transition: all .3s ease;
		}
	}

	ul {
		margin-left: 25px;
		li {
			font-size: 1.0em;
			line-height: 2em;
		}
	}

	@media screen and (max-width: ${breakpointDesktop}) {
		margin: 0 25px 0 25px;
	}
`;

export const HowDonateGridStyled = styled.div`
	display: grid;
	margin: 0 180px 40px 260px;
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
