import { useEffect } from 'react';
import { CardDescriptionStyled, CardImageStyled, CardStyled, CardTitleStyled } from './styles';
import Tags from '../Tags';

export default function Card(props: any) {
	useEffect(() => {
		console.log('Start Card: ', props);

		return () => {
			console.log('Exit Card');
		}
	}, []);

	return (
		<CardStyled>
			{props.image && <CardImageStyled>
				<img src={props.image} alt={props.title}/>
			</CardImageStyled>}
			<CardTitleStyled>
				<h1>{props.title}</h1>
			</CardTitleStyled>
			<CardDescriptionStyled image={props.image}>
				{props.description}
			</CardDescriptionStyled>
			{props.tags && <Tags tags={props.tags}/>}
		</CardStyled>
	);
}
