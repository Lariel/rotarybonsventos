import { IntroStyled } from './styles';

export default function PageIntro(props: any) {
	return (
		<IntroStyled>
			<h1>{props.intro}</h1>
			<h3>{props.info}</h3>
		</IntroStyled>
	)
}
