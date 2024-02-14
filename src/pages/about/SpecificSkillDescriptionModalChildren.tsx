import { Progress, Tooltip, Typography } from 'antd';
import { conicColors } from './ProgressBadgeDisplay';
import { useProgressBadge } from './ProgressBadgeContext';
import { skillLevel } from './about-me-field-texts';
import './SpecificSkillDescriptionModalChildren.css';
const { Paragraph, Title } = Typography;

const DEFAULT_LEVEL_ASSESSMENT_REASON =
  "I'm working on adding my reasoning - stay tuned!";

/**
 * (Obviously) needs a rename
 */
function SpecificSkillDescriptionModalChildren() {
  const { modalData } = useProgressBadge();

  return (
    <>
      <div className="progress-and-level-container">
        <Progress
          type="dashboard"
          percent={modalData.dashPercent}
          format={() => 'Done'}
          showInfo={false}
          strokeColor={conicColors}
        />
        <Tooltip
          title={skillLevel[modalData.level]['description']}
          placement="topLeft"
        >
          <Title className="progress-level-title" level={5}>
            {modalData.level}
          </Title>
        </Tooltip>
      </div>
      <Paragraph>
        {modalData.levelAssessmentReason || DEFAULT_LEVEL_ASSESSMENT_REASON}
      </Paragraph>
    </>
  );
}

export default SpecificSkillDescriptionModalChildren;
