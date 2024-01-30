import { Card, ImageProps } from "antd";
import { HomeSkillCardContent } from "./card-content";
const { Meta } = Card;

function Skillcard(
    { content, imageProps } : {
        content: HomeSkillCardContent,
        imageProps: Pick<ImageProps, 'alt' | 'src'>
    }
) {
    return (
        <Card
        className='home-skill-card'
        cover={<img alt={imageProps.alt} src={imageProps.src} />}
    >
        <Meta
            className='home-skill-card-meta'
            title={content.title}
            description={content.description}
        />
    </Card>
    )
}

export default Skillcard;