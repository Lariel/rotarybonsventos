import styled, { createGlobalStyle, keyframes } from 'styled-components';
import theme from './theme';
import bg from '@assets/concrete_seamless.jpg';
import colors from './colors';

export const maxWidthStructureDesktopLarge = '1360px';
export const maxWidthStructureDesktopMedium = '1200px';
export const maxWidthContentResponsive = '1440px';

export const maxWidthBreakpointDesktopFHD = '1920px';
export const maxWidthBreakpointDesktopWXGA = '1368px';
export const maxWidthBreakpointDesktopHD = '1280px';
export const maxWidthBreakpointDesktopXGA = '1024px';
export const maxWidthBreakpointMobile = '768px';

export const onFocus = keyframes`
	from {
		transform: translate(240px, 0px) scale(1);
	}
	to {
		transform: translate(0px, 0px) scale(1.2);
	}
`;

export const focusIn = keyframes`
	from {
		transform: translate(240px, 0px);
	}
	to {
		transform: translate(0px, 0px);
	}
`;

export const focusOut = keyframes`
	from {
		transform: translate(240px, 0px) scale(1.2);
	}
	to {
		transform: translate(0px, 0px) scale(1);
	}
`;

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
		color: ${theme.fontColorDefault};
  }

	button {
		cursor: pointer;
	}

	p {
		width: 100%;
		font-size: 1.2em;
		line-height: 2em;
		text-indent: 5%;
		b {
			font-size: 1em;
		}
		strong {
			font-size: 1em;
		}
	}

	h1 {
		font-size: 2em;
	}

	h2 {
		font-size: 1.47em;
	}

	h3 {
		font-size: 1.17em;
	}

	.fs2 {
		font-size: 2em;
	}

	body {
		.container-bg {
			background: ${colors.siteBG} url(${bg}) 50% 0;
		}

		.image-wrapper {
			overflow: hidden;
			img {
				transition: all 1s ease;
				&:hover {
					transform: scale(1.05);
					transition: all 1s ease;
				}
			}
		}

		.row {
			display: flex;
			width: 100%;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				flex-direction: column;
			}
		}

		.col-w10 {
			width: 10%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w20 {
			width: 20%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w30 {
			width: 30%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w40 {
			width: 40%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w50 {
			width: 50%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w60 {
			width: 60%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w70 {
			width: 70%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w80 {
			width: 80%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w90 {
			width: 90%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.col-w100 {
			width: 100%;
			overflow: hidden;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				width: 100%;
			}
		}

		.flex-center {
			display: flex;
			justify-content: center;
			text-align: center;
			@media screen and (max-width: ${maxWidthBreakpointMobile}) {
				align-items: center;
				flex-direction: column;
			}
		}

		.bold {
			font-weight: bold;
		}

		.bolder {
			font-weight: bolder;
		}

		.padding-20 {
			padding: 20px;
		}

		.container {
			display: flex;
			justify-content: center;

			.structure-desktop {
				width: 100%;
				max-width: ${maxWidthStructureDesktopLarge};
				display: flex;
				@media screen and (max-width: ${maxWidthBreakpointDesktopWXGA}) {
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
				animation: ${fadeInOpacity} 0.4s forwards;
				//background-color: ${theme.contentBGDefault};
				//box-shadow: 0 4px 18px 1px rgba(0, 0, 0, .2);
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
