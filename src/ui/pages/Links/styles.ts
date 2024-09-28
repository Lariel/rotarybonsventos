import styled from 'styled-components';
import bg_links from '@assets/bg_links.jpg';
import colors from '@ui/styles/colors';

export const VerticalLinksStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-image: url(${bg_links});
	background-position: 10%;
	background-size: cover;

	.vertical-link {
		padding: 20px 40px;
		background-color: ${colors.azure};
		border-radius: 50px;
		color: ${colors.white};
		text-decoration: none;
		font-size: 40px;
	}

	.social-links {
		padding-top: 40px;
		display: flex;
		justify-content: center;
    align-items: center;
		border-top: 2px solid ${colors.azure};
		width: 75%;
		.instagram-icon {
			margin: 0 20px 10px 0;
			height: 30px;
		}

		.linkedin-icon {
			margin: 0 0 10px 0;
			height: 30px;
		}

		.email-icon {
			margin: 0 0 10px 20px;
			height: 35px;
		}
	}

	@media screen and (min-width: 769px) {
		background-image: none;
	}
`;
