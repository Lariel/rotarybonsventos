import styled from 'styled-components';
import colors from '@ui/styles/colors';

export const HeaderContainerStyled = styled.header`

`;

export const HeaderContentStyled = styled.div`
	display: flex;
	height: 120px;
	background-color: ${colors.white};
	align-items: center;
	img {
		height: 100px;

	}

	.logo-header {
		padding-right: 20px;
		border-right: 3px solid ${colors.skyBlue};
	}

	.page-description {
		padding-left: 20px;
		font-size: 70px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: 800px;
		color: ${colors.azure};
		@media screen and (max-width: 1100px) {
			font-size: 60px;
		}
	}
`;
