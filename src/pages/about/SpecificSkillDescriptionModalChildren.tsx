import { Progress, Typography } from "antd";
import { conicColors } from "./ProgressBadgeDisplay";
import { useProgressBadge } from "./ProgressBadgeContext";
const { Paragraph, Title } = Typography;


/**
 * (Obviously) needs a rename
 */
function SpecificSkillDescriptionModalChildren() {
    const { modalData } = useProgressBadge();
    console.log('In InnerSpecificSkillDescriptionModalChildren', modalData)

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
            <Paragraph>{modalData.levelAssessmentReason}</Paragraph>
        </>
    )
};


export default SpecificSkillDescriptionModalChildren;
