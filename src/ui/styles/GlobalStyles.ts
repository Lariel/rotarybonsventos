import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open Sans, sans-serif;
  }

	body {
		.content-desktop {
			margin: 0 250px 0 250px;

			@media screen and (max-width: 1300px) {
				margin: 0 100px 0 100px;
			}
			@media screen and (max-width: 1000px) {
				display: none;
			}
		}

	}
`;

export const ContentStyled = styled.div`
	height: calc(100vh - 362px);
`;
