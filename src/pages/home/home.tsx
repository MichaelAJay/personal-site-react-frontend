
import { Row } from 'antd';
import Hero from '../../components/Hero';
import { ContinuousLearnerCard, CraftsmanshipCard, DedicationCard, LifecycleCard } from './card-content';
import './Home.css';
import HomeSkillcard from './HomeSkillcard';

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
                    <HomeSkillcard content={LifecycleCard} />
                    <HomeSkillcard content={CraftsmanshipCard} />
                    <HomeSkillcard content={DedicationCard} />
                    <HomeSkillcard content={ContinuousLearnerCard} />
                </Row>
                <div id={LifecycleCard.sectionId} className="section-red">SDLC Section</div>
                <div id={CraftsmanshipCard.sectionId} className="section-blue">Craftsmanship Section</div>
                <div id={DedicationCard.sectionId} className="section-red">Dedication Section</div>
                <div id={ContinuousLearnerCard.sectionId} className="section-blue">Continuous Learner Section</div>
            </Hero>
        </>
    )
}

export default Home;