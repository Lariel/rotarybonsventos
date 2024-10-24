import styled from 'styled-components';
import colors from '@ui/styles/colors';
import { breakpointDesktop, maxWidthStructureDesktopLarge } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';

export const MenuContainerStyled = styled.div`
	width: 100%;
	height: 59px;
	background-color: ${colors.azure};
	display: flex;

	@media screen and (max-width: ${breakpointDesktop}) {
		height: 0px;
	}
`;

export const MenuStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: ${maxWidthStructureDesktopLarge}) {
		justify-content: space-around;
	}
	.default {
		font-size: 20px;
		font-weight: bold;
		text-decoration: none;
		color: ${colors.white};
		&:hover, &:focus {
			color: ${theme.defaultHover};
			font-weight: bolder;
			transition: all .3s ease;
		}
	}

	.active {
		color: ${colors.rotaryGold};
		font-size: 20px;
		font-weight: bolder;
		text-decoration: none;
		transition: all .3s ease;
	}
`;
