import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Flex, Tabs, TabsProps, Typography } from 'antd';
import { useRef, useState } from 'react';
import CustomModal from '../../components/CustomModal';
import {
  AboutMe,
  aboutMePersonalAttributes,
  aboutMeProfessionalAttributes,
  TabNames,
  technologiesOBJECTS,
} from './about-me-field-texts';
import {
  aboutSite,
  recognizedPlacesToImprove,
  thingsIveLearned,
  wips,
} from './about-site-field-texts';
import './About.css';
import AboutSectionWithStandardList from './AboutSectionWithStandardList';
import {
  ProgressBadgeProvider,
  useProgressBadge,
} from './ProgressBadgeContext';
import SkillsDescriptionModalChildren from './SkillsDescriptionModalChildren';
import SkillTabList from './SkillTabList';
import SpecificSkillDescriptionModalChildren from './SpecificSkillDescriptionModalChildren';
const { Title, Paragraph } = Typography;

const tabNames: Array<TabNames | 'All'> = [
  'Frontend Development',
  'Backend Development',
  'Testing',
  'Database Management',
  'DevOps and Cloud Services',
  'All',
];
const tabs: TabsProps['items'] = tabNames.map((tabName, index) => ({
  key: (index + 1).toString(),
  label: tabName,
  children: <SkillTabList tabName={tabName} arr={technologiesOBJECTS} />,
}));

function InternalAbout() {
  const [isSkillsLegendModalOpen, setIsSkillsLegendModalOpen] = useState(false);

  const { modalOpen: modalVisible, modalData, hideModal } = useProgressBadge();

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
          behavior: 'smooth',
        });
      }
    }, 0);
  };

  const handleOpenSkillsLegendModal = () => {
    setIsSkillsLegendModalOpen(true);
  };

  const handleCloseSkillsLegendModal = () => {
    setIsSkillsLegendModalOpen(false);
  };

  return (
    <div className="about-container">
      <Flex justify={'space-between'} align={'start'}>
        <div className="about-me-content">
          <Title level={2}>{AboutMe.title}</Title>
          <Paragraph>{AboutMe.brief}</Paragraph>
          <Title level={3}>Professional Philosophy</Title>
          <Paragraph>{AboutMe.professionalPhilosophy}</Paragraph>
          <Title level={3}>Professional View of LLMs</Title>
          <Paragraph>{AboutMe.professionalViewOfLLMs}</Paragraph>
          <Title level={3}>{'My Journey (So Far)'}</Title>
          <Paragraph>{AboutMe.professionalJourney}</Paragraph>
          {/* <AboutSectionWithStandardList level={3} title="Interests" dataSource={aboutMeInterests} /> */}
        </div>
        <img className="headshot" alt="My headshot" src="/mjay_headshot.jpeg" />
      </Flex>
      {/* Attributes */}
      <Flex justify={'space-around'} align={'start'}>
        <AboutSectionWithStandardList
          level={3}
          title="Professional Attributes"
          dataSource={aboutMeProfessionalAttributes}
        />
        <AboutSectionWithStandardList
          level={3}
          title="Personal Attributes"
          dataSource={aboutMePersonalAttributes}
        />
      </Flex>
      {/* Skills */}
      <div className="skills">
        <Title level={3}>Skills</Title>
        <Title ref={skillsRef} level={4}>
          Technical
        </Title>
        <Button
          type="primary"
          shape="circle"
          icon={<QuestionCircleOutlined />}
          onClick={handleOpenSkillsLegendModal}
        />
        <Tabs defaultActiveKey="1" items={tabs} onChange={onChangeTab} />
      </div>
      <div className="about-site-container">
        <Title level={2}>{aboutSite.title}</Title>
        <Paragraph>{aboutSite.brief}</Paragraph>
        <Paragraph>{aboutSite.p2}</Paragraph>
        <Paragraph>{aboutSite.p3}</Paragraph>
        <Paragraph>{aboutSite.p4}</Paragraph>
        <AboutSectionWithStandardList
          level={3}
          title="Things I've Learned"
          dataSource={thingsIveLearned}
        />
        <AboutSectionWithStandardList
          level={3}
          title="Recognized Places to Improve"
          dataSource={recognizedPlacesToImprove}
        />
        <AboutSectionWithStandardList
          level={3}
          title="Works in Progress"
          dataSource={wips}
        />
        {/* Modals */}
        <CustomModal
          title="Skills Description"
          open={isSkillsLegendModalOpen}
          width={'90%'}
          onOk={handleCloseSkillsLegendModal}
          onCancel={handleCloseSkillsLegendModal}
          isFooterNull={true}
        >
          <SkillsDescriptionModalChildren />
        </CustomModal>
        <CustomModal
          title={modalData.title}
          open={modalVisible}
          width={'90%'}
          onOk={hideModal}
          onCancel={hideModal}
          isFooterNull={true}
        >
          <SpecificSkillDescriptionModalChildren />
        </CustomModal>
      </div>
    </div>
  );
}

// export default About;
export default function About() {
  return (
    <ProgressBadgeProvider>
      <InternalAbout />
    </ProgressBadgeProvider>
  );
}

/**
 * Note:  I'm not sure if the context specific implementation should occur in About and be passed in to Inner...
 */
