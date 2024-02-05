import { Progress, Typography } from "antd";
import { conicColors } from "./ProgressBadgeDisplay";
import { useProgressBadge } from "./ProgressBadgeContext";
const { Paragraph, Title } = Typography;

const DEFAULT_LEVEL_ASSESSMENT_REASON = "I'm working on adding my reasoning - stay tuned!";

/**
 * (Obviously) needs a rename
 */
function SpecificSkillDescriptionModalChildren() {
    const { modalData } = useProgressBadge();

    return (
        <>
            <Progress
                type="dashboard"
                percent={modalData.dashPercent}
                format={() => 'Done'}
                showInfo={false}
                strokeColor={conicColors}
            />
            <Title level={5}>{modalData.level}</Title>
            <Paragraph>{modalData.levelAssessmentReason || DEFAULT_LEVEL_ASSESSMENT_REASON}</Paragraph>
        </>
    )
};


export default SpecificSkillDescriptionModalChildren;
