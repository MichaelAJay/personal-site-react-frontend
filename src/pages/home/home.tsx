
import { Row } from 'antd';
import Hero from '../../components/Hero';
import { ContinuousLearnerCard, CraftsmanshipCard, DedicationCard, LifecycleCard } from './card-content';
import './Home.css';
import HomeSkillCard from './HomeSkillCard';
import HomeSkillSection from './HomeSkillSection';

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
                    <HomeSkillCard content={LifecycleCard} />
                    <HomeSkillCard content={CraftsmanshipCard} />
                    <HomeSkillCard content={DedicationCard} />
                    <HomeSkillCard content={ContinuousLearnerCard} />
                </Row>
                {/* <div id={LifecycleCard.sectionId} className="section-red">SDLC Section</div>
                <div id={CraftsmanshipCard.sectionId} className="section-blue">Craftsmanship Section</div>
                <div id={DedicationCard.sectionId} className="section-red">Dedication Section</div>
                <div id={ContinuousLearnerCard.sectionId} className="section-blue">Continuous Learner Section</div> */}
                <HomeSkillSection
                    id={LifecycleCard.sectionId}
                    img={{ isLeft: true,  alt: 'Alt lifecycle card section image', src: '/project-lifecycle-expertise-section-image.png' }}
                >
                    <div className='section-red'>SDLC Section</div>
                </HomeSkillSection>
                <HomeSkillSection
                    id={CraftsmanshipCard.sectionId}
                    img={{ isLeft: false,  alt: 'Alt craftsmanship card section image', src: '/code-craftsmanship-section-image.png' }}
                >
                    <div className='section-red'>Craftsmanship Section</div>
                </HomeSkillSection>
                <HomeSkillSection
                    id={DedicationCard.sectionId}
                    img={{ isLeft: true,  alt: 'Alt Dedication section image', src: '/dedication-section-image.png' }}
                >
                    <div className='section-red'>Dedication Section</div>
                </HomeSkillSection>
                <HomeSkillSection
                    id={ContinuousLearnerCard.sectionId}
                    img={{ isLeft: false,  alt: 'Alt Continuous Learner card section image', src: '/continuous-learner-section-image.png' }}
                >
                    <div className='section-red'>Continuous Learner Section</div>
                </HomeSkillSection>
            </Hero>
        </>
    )
}

export default Home;