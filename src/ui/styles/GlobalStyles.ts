import styled, { createGlobalStyle } from 'styled-components';

export const maxWidthStructureDesktop = '1360px';
export const maxWidthContentResponsive = '1440px';
export const breakpointDesktop = '768px';

export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
  }

	body {
		.container {
			display: flex;
			justify-content: center;

			.structure-desktop {
				width: 100%;
				max-width: ${maxWidthStructureDesktop};
				display: flex;
				@media screen and (max-width: ${breakpointDesktop}) {
					display: none;
				}
			}

			.structure-mobile {
				width: 100%;
				display: flex;
				@media screen and (min-width: ${breakpointDesktop}) {
					display: none;
				}
			}

			.content-responsive {
				width: 100%;
				max-width: ${maxWidthContentResponsive};
				display: flex;
				justify-content: center;
				background-color: antiquewhite;
			}
		}
	}
`;

export const ContentStyled = styled.div`
	height: calc(100vh - 362px);
	@media screen and (max-width: ${breakpointDesktop}) {
		height: calc(100dvh - 205px);
	}
`;

export const ContainerStyled = styled.div`

`;
