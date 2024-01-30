
import { Card, Row, Typography } from 'antd';
import Hero from '../../components/Hero';
import { LifecycleCard } from './card-content';
import './Home.css';
import './Skillcard.css';
const { Meta } = Card;

function Home() {
    return (
        <Hero>
            <div>
                <img className="home-image" src="/home-hero.png" alt="Surreal mountains scene" />
            </div>
            <Row
                className="home-proficiencies-bar"
                justify={'space-evenly'}
            >
                <Card
                    className='home-skill-card'
                    cover={<img alt="Triangle with tree logo" src="/bw-triangle-with-tree.png" />}
                >
                    <Meta
                        className='home-skill-card-meta'
                        title={LifecycleCard.title}
                        description={LifecycleCard.description}
                    />
                </Card>
                <Card title="My second skill" className='home-skill-card'>
                    <Typography>Line 1</Typography>
                    <Typography>Line 2</Typography>
                </Card>
                <Card title="My third skill" className='home-skill-card'>
                    <Typography>Line 1</Typography>
                    <Typography>Line 2</Typography>
                </Card>
                <Card title="My fourth skill" className='home-skill-card'>
                    <Typography>Line 1</Typography>
                    <Typography>Line 2</Typography>
                </Card>
            </Row>
        </Hero>

    )
}

export default Home;