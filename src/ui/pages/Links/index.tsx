import { Link } from 'react-router-dom';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { VerticalLinksStyled } from './styles';
import { routes } from '@app/Router/routes';
import icon_instagram from '@assets/icon_instagram.svg';
import icon_linkedin from '@assets/icon_linkedin.svg';
import icon_mail from '@assets/icon_mail.svg';
import { social } from '@app/constants/constants';

export default function Links() {
	return (
		<ContainerStyled className='container'>
			<ContentStyled className='page-links'>
				<VerticalLinksStyled>
					<Link className='vertical-link' to={routes.contribute}>Contribua</Link>
					<Link className='vertical-link' to={routes.projects}>Projetos</Link>
					<Link className='vertical-link' to={routes.accountability}>Transparência</Link>
					<div className='social-links structure-mobile'>
						<a href={social.instagram} target='_blank'>
							<img
								className='instagram-icon'
								src={icon_instagram}
								alt='Acesse nosso Instagram' />
						</a>

						<a href={social.linkedin} target='_blank'>
							<img
								className='linkedin-icon'
								src={icon_linkedin}
								alt='Acesse nosso LinkedIn' />
						</a>

						<a href={'mailto'+social.email}>
							<img
								className='email-icon'
								src={icon_mail} alt='Envie um e-mail' />
						</a>

					</div>
				</VerticalLinksStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
