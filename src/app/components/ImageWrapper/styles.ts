import styled from 'styled-components';

export const ImageStyled = styled.div`
	overflow: hidden;
	img {
		transition: all 1s ease;
		&:hover {
			transform: scale(1.05);
			transition: all 1s ease;
		}
	}
`
