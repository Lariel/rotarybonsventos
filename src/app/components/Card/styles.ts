import styled from 'styled-components';
import colors from '@ui/styles/colors';
import { maxWidthBreakpointMobile, fadeInScale } from '@ui/styles/GlobalStyles';

const cardWidth = '300px';
const cardWidthMobile = '85%';
const cardHeight = '350px';
const cardPadding = '5px';
const cardMargin = '10px';

export const CardStyled = styled.div`
	//animation: ${fadeInScale} 0.3s forwards;
	margin: ${cardMargin};
	padding: ${cardPadding};
	width: ${cardWidth};
	height: ${cardHeight};
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	background-color: ${colors.white};
	transform: translateZ(0);
	transition: all .3s ease;
	a {
		align-self: end;
		font-weight: 600;
		cursor: pointer;
		margin: 0 5px 0 0;
		@media screen and (max-width: ${maxWidthBreakpointMobile}) {
			text-decoration: underline dotted;
		}
		&:hover, &:focus {
			color: ${colors.rotaryGold};
			font-weight: bolder;
			transition: all .3s ease;
		}
	}
	&:hover {
		box-shadow: 0 4px 18px 1px rgba(0, 0, 0, .2);
		//transform: translateY(-4px);
		transform: scale(1.02);
	}
	@media screen and (max-width: ${maxWidthBreakpointMobile}) {
		width: ${cardWidthMobile};
		box-shadow: 0 4px 18px 1px rgba(0, 0, 0, .2);
	}
`;

export const CardImageStyled = styled.div`
	display: flex;
	width: 100%;
	height: 150px;
	margin-bottom: 15px;
	overflow: hidden;
	transition: all 2s ease;
	img {
		width: 100%;
	}
`;

export const CardTitleStyled = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	align-items: center;
	text-transform: capitalize;
	justify-content: center;
	margin-bottom: 5px;
	font-size: 1.1rem;
	font-weight: 600;
`;

export const CardDescriptionStyled = styled.div.attrs<{ image: string}>(props => ({
	image: props.image
}))`
	display: flex;
	width: 100%;
	height: ${({image}) => image ? '80px' : '250px'};
	flex-wrap: wrap;
	align-items: flex-start;
	font-size: 1rem;
	font-weight: 400;
`;
