import styled from 'styled-components';
import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile, maxWidthStructureDesktopLarge } from '@ui/styles/GlobalStyles';
import theme from '@ui/styles/theme';

export const PageStyled = styled.div.attrs<{ismenuopen: boolean}>(props => ({
	ismenuopen: props.ismenuopen
}))`
	width: 100%;
	height: 59px;
	background-color: ${theme.colorDefault};
	display: flex;
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		padding: 0 0 0 10px;
		position: absolute;
		top: 200px;
		width: ${({ ismenuopen }) => ismenuopen ? '70%' : '0'};
		height: calc(100dvh - 200px);
		left: ${({ ismenuopen }) => ismenuopen ? '0' : '-500px'};
		transition: all .3s ease-in-out;
		z-index: 200;
	}
`;

export const MenuStyled = styled.div.attrs<{ismobile: boolean}>(props => ({
	ismobile: props.ismobile
}))`
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: ${({ ismobile }) => ismobile ? 'column' : 'row'};
	align-items: ${({ ismobile }) => ismobile ? 'flex-start' : 'center'};
	justify-content: space-between;
	@media screen and (max-width: ${maxWidthStructureDesktopLarge}) {
		justify-content: space-around;
	}
	.default {
		font-size: 20px;
		font-weight: bold;
		text-decoration: none;
		color: ${colors.white};
		&:hover, &:focus {
			color: ${theme.hoverDefault};
			font-weight: bolder;
			transition: all .3s ease;
		}
	}

	.active {
		color: ${colors.rotaryGold};
		font-size: 20px;
		font-weight: bolder;
		text-decoration: none;
		transition: all .3s ease;
	}
`;

export const MenuToggleStyled = styled.div`
 .menuToggle {
		display: flow;
		position: absolute;
		top: 22px;
		left: 22px;
		z-index: 1;
		-webkit-user-select: none;
		user-select: none;
	}

	.menuToggle input {
		display: block;
		width: 40px;
		height: 40px;
		position: absolute;
		opacity: 0;
		z-index: 2;
		-webkit-touch-callout: none;
	}

	.menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: ${colors.white};
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								opacity 0.55s ease;
	}

	.menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	.menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	.menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(0px, -19px);
		background: ${theme.hoverDefault}
	}

	.menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	.menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, 20px);
	}


`;
