
import { Row } from 'antd';
import Hero from '../../components/Hero';
import { ContinuousLearnerCard, CraftsmanshipCard, DedicationCard, LifecycleCard } from './card-content';
import './Home.css';
import HomeSkillCard from './HomeSkillCard';
import HomeSkillSection from './HomeSkillSection';
import { ContinuousLearnerContent, CraftsmanshipContent, DedicationContent, LifecycleContent } from './skill-content';

function Home() {
    return (
        <>
            <Hero>
                <div>
                    <img className="home-image" src="/home-hero.png" alt="Surreal mountains scene" />
                </div>
                <Row
                    className="home-proficiencies-bar"
                    justify={'space-around'}
                >
                    <HomeSkillCard {...LifecycleCard} />
                    <HomeSkillCard {...CraftsmanshipCard} />
                    <HomeSkillCard {...DedicationCard} />
                    <HomeSkillCard {...ContinuousLearnerCard} />
                </Row>
            <HomeSkillSection
                id={LifecycleCard.sectionId}
                img={{ isLeft: true,  alt: 'Alt lifecycle card section image', src: '/project-lifecycle-expertise-section-image.png' }}
                content={LifecycleContent}
            />
            <HomeSkillSection
                id={CraftsmanshipCard.sectionId}
                img={{ isLeft: false,  alt: 'Alt craftsmanship card section image', src: '/code-craftsmanship-section-image.png' }}
                content={CraftsmanshipContent}
            />
            <HomeSkillSection
                id={DedicationCard.sectionId}
                img={{ isLeft: true,  alt: 'Alt Dedication section image', src: '/dedication-section-image.png' }}
                content={DedicationContent}
            />
            <HomeSkillSection
                id={ContinuousLearnerCard.sectionId}
                img={{ isLeft: false,  alt: 'Alt Continuous Learner card section image', src: '/continuous-learner-section-image.png' }}
                content={ContinuousLearnerContent}
            />
            </Hero>
        </>
    )
}

export default Home;