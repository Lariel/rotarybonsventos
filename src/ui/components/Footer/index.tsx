import { FooterContainerStyled, FooterContentStyled } from './styles';
import icon_link from '@assets/icon_link.svg';
import icon_instagram from '@assets/icon_instagram.svg';
import icon_linkedin from '@assets/icon_linkedin.svg';
import icon_mail from '@assets/icon_mail.svg';
import logo_white from '@assets/logo_white.png';

export function Footer() {
	return (
		<FooterContainerStyled className='container'>
			<FooterContentStyled className='structure-desktop'>
				<div className='footer-superior'>
					<a href='https://www.rotary.org/pt' target='_blank'>rotary.org</a>
					<img src={icon_link} alt='Link site Rotary.org' />
				</div>
				<div className='footer-inferior'>
					<div className='footer-contact-us'>
						Fale conosco
					</div>
					<div className='footer-contact-icons'>
						<a href='https://www.instagram.com/rotarybonsventos' target='_blank'>
							<img
								className='footer-instagram-icon'
								src={icon_instagram}
								alt='Acesse nosso Instagram' />
						</a>

						<a href='https://www.linkedin.com/company/rotary-club-de-osorio-bons-ventos' target='_blank'>
							<img className='footer-linkedin-icon' src={icon_linkedin} alt='Acesse nosso LinkedIn' />
						</a>

						<a href='mailto:rotarybonsventos@gmail.com'>
							<img className='footer-email-icon' src={icon_mail} alt='Envie um e-mail' />
						</a>

					</div>
					<div className='footer-logo'>
						<img src={logo_white} alt='Logo Rotary Bons Ventos Footer' />
					</div>
				</div>
			</FooterContentStyled>
			<FooterContentStyled className='structure-mobile'>
				<div className='footer-superior'>
					<a href='https://www.rotary.org/pt' target='_blank'>rotary.org</a>
					<img src={icon_link} alt='Link site Rotary.org' />
				</div>
				<div className='footer-inferior'>
					<div className='footer-contact-us'>
						Fale conosco
					</div>
					<div className='footer-contact-icons'>
						<a href='https://www.instagram.com/rotarybonsventos' target='_blank'>
							<img
								className='footer-instagram-icon'
								src={icon_instagram}
								alt='Acesse nosso Instagram' />
						</a>

						<a href='https://www.linkedin.com/company/rotary-club-de-osorio-bons-ventos' target='_blank'>
							<img className='footer-linkedin-icon' src={icon_linkedin} alt='Acesse nosso LinkedIn' />
						</a>

						<a href='mailto:rotarybonsventos@gmail.com'>
							<img className='footer-email-icon' src={icon_mail} alt='Envie um e-mail' />
						</a>

					</div>
					<div className='footer-logo'>
						<img src={logo_white} alt='Logo Rotary Bons Ventos Footer' />
					</div>
				</div>
			</FooterContentStyled>
		</FooterContainerStyled>
	);
}
