import { Flex, List, TabsProps, Typography } from "antd";
import { AboutMe, aboutMePersonalAttributes, aboutMeProfessionalAttributes, devStrengths, TabNames, technologies, technologiesOBJECTS } from "./about-field-texts";
import './About.css';
import ProgressBadge from "./Progress-Badge";
import SkillTabList from "./SkillTabList";
const { Title, Paragraph } = Typography;

const onChangeTab = (key: string) => {
    console.log(key);
};

const tabMap: Record<string, TabNames> = {
    FE: 'Frontend Development',
    BE: 'Backend Development',
    Test: 'Testing',
    DB: 'Database Management',
    DevOps: 'DevOps and Cloud Services'
}

const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: tabMap.FE,
        children: <SkillTabList tabName={tabMap.FE} arr={technologiesOBJECTS} />
    },
    {
        key: '2',
        label: tabMap.BE,
        children: <SkillTabList tabName={tabMap.BE} arr={technologiesOBJECTS} />
    },
    {
        key: '3',
        label: tabMap.Test,
        children: <SkillTabList tabName={tabMap.Test} arr={technologiesOBJECTS} />
    },
    {
        key: '4',
        label: tabMap.DB,
        children: <SkillTabList tabName={tabMap.DB} arr={technologiesOBJECTS} />
    },
    {
        key: '5',
        label: tabMap.DevOps,
        children: <SkillTabList tabName={tabMap.DevOps} arr={technologiesOBJECTS} />
    },
];

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
                            <ProgressBadge {...item}/>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default About;