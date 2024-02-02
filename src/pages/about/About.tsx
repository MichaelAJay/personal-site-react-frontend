import { Flex, List, Tabs, TabsProps, Typography } from "antd";
import { useRef } from "react";
import { AboutMe, aboutMePersonalAttributes, aboutMeProfessionalAttributes, TabNames, technologiesOBJECTS } from "./about-field-texts";
import './About.css';
import SkillTabList from "./SkillTabList";
const { Title, Paragraph } = Typography;

const tabNames: Array<TabNames> = ['Frontend Development', 'Backend Development', 'Testing', 'Database Management', 'DevOps and Cloud Services'];
const tabs: TabsProps['items'] = tabNames.map((tabName, index) => ({
    key: (index + 1).toString(),
    label: tabName,
    children: <SkillTabList tabName={tabName} arr={technologiesOBJECTS} />
}));

function About() {
    const skillsRef = useRef<HTMLHeadingElement>(null);

    const onChangeTab = () => {
        setTimeout(() => {
            if (skillsRef.current) {
                const offset = 84;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = skillsRef.current.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 0);
    };

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
                <Title ref={skillsRef} level={4}>Technical</Title>
                <Tabs defaultActiveKey="1" items={tabs} onChange={onChangeTab} />
            </div>
        </div>
    )
}

export default About;