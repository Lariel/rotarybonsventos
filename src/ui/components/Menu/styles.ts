import styled from 'styled-components';
import colors from '@ui/styles/colors';

export const MenuContainerStyled = styled.div`
	width: 100%;
	height: 59px;
	background-color: ${colors.azure};
	display: flex;

	@media screen and (max-width: 768px) {
		height: 0px;
	}
`;

export const MenuStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		font-size: 20px;
		font-weight: bold;
		text-decoration: none;
		color: ${colors.white};
		&:hover, &:focus {
			color: ${colors.rotaryGold};
			font-weight: bolder;
		}
	}
`;
