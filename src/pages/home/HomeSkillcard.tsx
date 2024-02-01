import './HomeSkillCard.css'
import { Card } from "antd";
import { HomeSkillCardContent } from "./card-content";
const { Meta } = Card;

function HomeSkillCard(
    { content }: { 
        content: HomeSkillCardContent;
    }
) {
    return (
        <Card
            className='home-skill-card'
            onClick={() => {
                const section = document.getElementById(content.sectionId)
                if (section) {
                    // section.scrollIntoView({ behavior: 'smooth' });
                    const yOffset = -84;
                    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' })
                }
            }}
            cover={<img alt={content.imgAlt} src={content.imgSrc} />}
        >
            <Meta
                className='home-skill-card-meta'
                title={content.title}
                description={content.description}
            />
        </Card>
    )
}

export default HomeSkillCard;