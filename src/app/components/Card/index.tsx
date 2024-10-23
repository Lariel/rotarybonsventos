import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardDescriptionStyled, CardImageStyled, CardStyled, CardTitleStyled } from './styles';
import Tags from '../Tags';
import { routes } from '@app/Router/routes';

export default function Card(props: any) {
	useEffect(() => {
		console.log('Start Card: ', props);

		return () => {
			console.log('Exit Card');
		}
	}, []);

	const navigate = useNavigate();

	function handleClick() {
		navigate(routes.projects.path+'/'+props.id);
	}

	return (
		<CardStyled>
			{props.image && <CardImageStyled>
				<img src={props.image} alt={props.title}/>
			</CardImageStyled>}
			<CardTitleStyled>
				{props.title}
			</CardTitleStyled>
			<CardDescriptionStyled image={props.image}>
				{props.description}
			</CardDescriptionStyled>
			{props.tags && <Tags tags={props.tags}/>}
			{props.knowMore && <a onClick={ handleClick }>Saiba mais</a>}
		</CardStyled>
	);
}
