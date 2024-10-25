import styled from 'styled-components';
import colors from '@ui/styles/colors';
import theme from '@ui/styles/theme';
import { maxWidthBreakpointDesktopHD, maxWidthBreakpointDesktopWXGA } from '@ui/styles/GlobalStyles';

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

	.logo-header-desktop {
		padding-right: 20px;
		border-right: 3px solid ${theme.mainColor};
		margin-left: 73px;
		@media screen and (max-width: ${maxWidthBreakpointDesktopWXGA}) {
			margin-left: 10px;
		}
		@media screen and (max-width: ${maxWidthBreakpointDesktopHD}) {
			margin-left: 27px;
		}
	}

	.page-description {
		padding-left: 20px;
		font-size: 70px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: 910px;
		color: ${theme.mainColor};
		@media screen and (max-width: 1100px) {
			font-size: 50px;
		}
	}
`;

export const HeaderContentMobileStyled = styled.header`
	display: flex;
	height: 200px;
	background-color: ${theme.mainColor};
	align-items: center;
	justify-content: center;
	img {
		height: 170px;
	}

	@media screen and (max-width: 400px) {
		img {
			height: 110px;
		}
	}

`;
