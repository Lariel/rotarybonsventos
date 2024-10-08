import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const maxWidthStructureDesktopLarge = '1360px';
export const maxWidthStructureDesktopMedium = '1200px';
export const maxWidthContentResponsive = '1440px';
export const breakpointDesktop = '768px';

export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
		color: ${colors.siteFontColor};
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
				@media screen and (max-width: ${breakpointDesktop}) {
					display: none;
				}
			}

			.structure-mobile {
				width: 100%;
				padding: 0 10px 0 10px;
				display: flex;
				@media screen and (min-width: ${breakpointDesktop}) {
					display: none;
				}
			}

			.content-responsive {
				width: 100%;
				max-width: ${maxWidthContentResponsive};
				display: flex;
				flex-wrap: wrap;
    		flex-direction: row;
				justify-content: center;
				background-color: ${colors.contentBG};
				//background-color: ${colors.cloud};
			}
		}
	}
`;

export const ContentStyled = styled.div`
	min-height: calc(100vh - 362px);
	@media screen and (max-width: ${breakpointDesktop}) {
		min-height: calc(100vh - 383px);
	}
`;

export const ContainerStyled = styled.div`

`;
