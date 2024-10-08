import { breakpointDesktop } from '@ui/styles/GlobalStyles';
import styled from 'styled-components';

export const IntroStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	padding: 0 10em 0 10em;
	margin-top: 2em;
	margin-bottom: 2em;

	@media screen and (max-width: ${breakpointDesktop}) {
		padding: 0;
	}

	h1 {
		text-align: center;
		font-weight: 400;
		width: 100%;
    display: flex;
    justify-content: center;
	}
	h3 {
		text-align: left;
		font-weight: 400;
		line-height: 2rem;
		width: 100%;
    display: flex;
    justify-content: center;
		margin-top: 1em;
		@media screen and (max-width: ${breakpointDesktop}) {
			display: none;
		}
	}
`
