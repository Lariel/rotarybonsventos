import styled, { createGlobalStyle, keyframes } from 'styled-components';
import colors from './colors';
import theme from './theme';

export const maxWidthStructureDesktopLarge = '1360px';
export const maxWidthStructureDesktopMedium = '1200px';
export const maxWidthContentResponsive = '1440px';

export const maxWidthBreakpointDesktopFHD = '1920px';
export const maxWidthBreakpointDesktopWXGA = '1366px';
export const maxWidthBreakpointDesktopHD = '1280px';
export const maxWidthBreakpointDesktopXGA = '1024px';
export const maxWidthBreakpointMobile = '768px';

export const fadeInOpacity = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const fadeInScale = keyframes`
	from {
		transform: scale(0);
	}
	to {
		transform: scale(1);
	}
`;

export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
		font-size: 15px;
		color: ${colors.siteFontColor};
  }

	p {
		width: 100%;
		font-size: 1.2em;
		line-height: 2em;
		text-indent: 5%;
	}

	h1 {
		font-size: 2em;
	}

	h3 {
		font-size: 1.17em;
	}

	body {
		.container {
			display: flex;
			justify-content: center;

			.structure-desktop {
				width: 100%;
				max-width: ${maxWidthStructureDesktopLarge};
				display: flex;
				@media screen and (max-width: 1366px) {
					max-width: ${maxWidthStructureDesktopMedium};
				}
				@media screen and (max-width: ${maxWidthBreakpointMobile}) {
					display: none;
				}
			}

			.structure-mobile {
				width: 100%;
				padding: 0 10px 0 10px;
				display: flex;
				@media screen and (min-width: ${maxWidthBreakpointMobile}) {
					display: none;
				}
			}

			.page-links {
				width: 100%;
				max-width: ${maxWidthContentResponsive};
				animation: ${fadeInOpacity} 0.3s forwards;
			}

			.content-responsive {
				width: 100%;
				max-width: ${maxWidthContentResponsive};
				display: flex;
				flex-wrap: wrap;
    		flex-direction: row;
				justify-content: center;
				align-content: flex-start;
				animation: ${fadeInOpacity} 0.3s forwards;
				background-color: ${theme.defaultContentBG};
				box-shadow: 0 4px 18px 1px rgba(0, 0, 0, .2);
			}
		}
	}
`;

export const ContentStyled = styled.div`
	min-height: calc(100vh - 362px);
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		min-height: calc(100vh - 400px);
	}
`;

export const ContainerStyled = styled.div`

`;
