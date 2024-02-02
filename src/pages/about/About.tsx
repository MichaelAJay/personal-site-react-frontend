import { Flex, List, Typography } from "antd";
import { AboutMe, aboutMePersonalAttributes, aboutMeProfessionalAttributes, devStrengths, technologies, technologiesOBJECTS } from "./about-field-texts";
import './About.css';
import ProgressBadge from "./Progress-Badge";
const { Title, Paragraph } = Typography;

function About() {
    return (
        <div className="about-container">
            <Flex justify={'space-between'} align={'start'}>
                <div
                    className="about-me-content"
                >
                    <Title level={2}>{AboutMe.title}</Title>
                    <Paragraph>{AboutMe.brief}</Paragraph>
                    <Title level={3}>Professional Philosophy</Title>
                    <Paragraph>{AboutMe.professionalPhilosophy}</Paragraph>
                    <Title level={3}>Professional View of LLMs</Title>
                    <Paragraph>{AboutMe.professionalViewOfLLMs}</Paragraph>
                    <Title level={3}>{'My Journey (So Far)'}</Title>
                    <Paragraph>{AboutMe.professionalJourney}</Paragraph>
                    {/* <Title level={3}>Interests</Title>
                    <List
                        size="small"
                        itemLayout="horizontal"
                        dataSource={aboutMeInterests}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta description={item}/>
                            </List.Item>
                        )}
                    /> */}
                </div>
                <img
                    className="headshot"
                    alt="My headshot"
                    src="/mjay_headshot.jpeg"
                />
            </Flex>
            {/* Attributes */}
            <Flex justify={'space-around'} align={'start'}>
                <div>
                    <Title level={3}>Professional Attributes</Title>
                    <List
                        size="small"
                        itemLayout="horizontal"
                        dataSource={aboutMeProfessionalAttributes}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta description={item}/>
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <Title level={3}>Personal Attributes</Title>
                    <List
                        size="small"
                        itemLayout="horizontal"
                        dataSource={aboutMePersonalAttributes}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta description={item}/>
                            </List.Item>
                        )}
                    />
                </div>
            </Flex>
            {/* Strengths and weaknesses */}
            <div className="skills">
                <Title level={3}>Skills</Title>
                <Title level={4}>Technical</Title>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    size="small"
                    itemLayout="horizontal"
                    dataSource={technologiesOBJECTS}
                    renderItem={item => (
                        <List.Item>
                            {/* <List.Item.Meta description={item} /> */}
                            <ProgressBadge {...item}/>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default About;