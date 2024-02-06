import './HomeSkillCard.css';
import { Card } from 'antd';
import { HomeSkillCardContent } from './card-content';
import useVerticalScrollToSection from '../../hooks/vertical-scroll-to-section';
const { Meta } = Card;

function HomeSkillCard(props: HomeSkillCardContent) {
  const handleClick = useVerticalScrollToSection(props.sectionId, -84);

  return (
    <Card
      className="home-skill-card"
      onClick={handleClick}
      cover={<img alt={props.imgAlt} src={`${process.env.PUBLIC_URL}${props.imgSrc}`} loading="lazy" />}
    >
      <Meta
        className="home-skill-card-meta"
        title={props.title}
        description={props.description}
      />
    </Card>
  );
}

// export default verticalScrollToSectionHOC(HomeSkillCard);
export default HomeSkillCard;
