import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
  }

	body {
		.container-desktop {
			display: flex;
			justify-content: center;

			.content-desktop {
				width: 100%;
				max-width: 1216px;
				display: flex;

				/* @media screen and (max-width: 1300px) {
					margin: 0 100px 0 100px;
				}
				@media screen and (max-width: 1000px) {
					display: none;
				} */
		}

		}
	}
`;

export const ContentStyled = styled.div`
	height: calc(100vh - 362px);
`;

export const ContainerStyled = styled.div`

`;
