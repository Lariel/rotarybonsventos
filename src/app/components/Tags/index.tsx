import { TagsContainerStyled } from './styles';
import Tag from './Tag';

export default function Tags(props: any) {

	return (
		<TagsContainerStyled>
			{
				props.tags.map((tag: any) => {
					return <Tag key={tag.id} text={tag.text}/>
				})
			}
		</TagsContainerStyled>
	)
}
