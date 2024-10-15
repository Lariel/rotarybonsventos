import { useEffect } from 'react';
import { ParagraphStyled } from './styles';

export default function P(props: any) {

	useEffect(() => {
		console.log('Start Paragraph');

		return () => {
			console.log('Exit Paragraph');
		}
	}, []);

	return(
		<ParagraphStyled>
			{ props.text }
		</ParagraphStyled>
	)

}
