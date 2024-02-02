import { Flex, List, Tabs, TabsProps, Typography } from "antd";
import { useRef } from "react";
import { AboutMe, aboutMePersonalAttributes, aboutMeProfessionalAttributes, TabNames, technologiesOBJECTS } from "./about-me-field-texts";
import { aboutSite, recognizedPlacesToImprove, thingsIveLearned, wips } from "./about-site-field-texts";
import './About.css';
import SkillTabList from "./SkillTabList";
const { Title, Paragraph } = Typography;

const tabNames: Array<TabNames | 'All'> = ['Frontend Development', 'Backend Development', 'Testing', 'Database Management', 'DevOps and Cloud Services', 'All'];
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
            <div className="about-site-container">
                <Title level={2}>{aboutSite.title}</Title>
                <Paragraph>{aboutSite.brief}</Paragraph>
                <Paragraph>{aboutSite.p2}</Paragraph>
                <Paragraph>{aboutSite.p3}</Paragraph>
                <Paragraph>{aboutSite.p4}</Paragraph>
                <Title level={3}>Things I've Learned</Title>
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={thingsIveLearned}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta description={item}/>
                        </List.Item>
                    )}
                />
                <Title level={3}>Recognized Places to Improve</Title>
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={recognizedPlacesToImprove}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta description={item}/>
                        </List.Item>
                    )}
                />
                <Title level={3}>Works in Progress</Title>
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={wips}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta description={item}/>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default About;