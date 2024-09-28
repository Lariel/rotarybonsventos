import styled, { createGlobalStyle } from 'styled-components';

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

			.content-desktop {
				width: 100%;
				max-width: 1216px;
				display: flex;
				@media screen and (max-width: 768px) {
					display: none;
				}
			}

			.content-mobile {
				width: 100%;
				display: flex;
				@media screen and (min-width: 768px) {
					display: none;
				}
			}
		}
	}
`;

export const ContentStyled = styled.div`
	height: calc(100vh - 362px);
	@media screen and (max-width: 768px) {
		height: calc(100dvh - 205px);
	}
`;

export const ContainerStyled = styled.div`

`;
