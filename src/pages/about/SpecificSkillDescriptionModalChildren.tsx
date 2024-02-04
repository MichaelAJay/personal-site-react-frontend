import { Progress, Typography } from "antd";
import ProgressBadge, { conicColors, IProgressBadgeProps } from "./ProgressBadge";
import { ProgressBadgeProvider, useProgressBadge } from "./ProgressBadgeContext";
const { Paragraph } = Typography;


/**
 * (Obviously) needs a rename
 */
function InnerSpecificSkillDescriptionModalChildren() {
    const { modalData } = useProgressBadge();

    return (
        /**
         * Should include the title (which actually comes from the CustomModal title prop - not needed here)
         * Should include the Progress Badge props, essentially
         */
        <>
            <Progress
                type="dashboard"
                percent={modalData.dashPercent}
                showInfo={false}
                strokeColor={conicColors}
            />
            <Paragraph>{modalData.levelAssessmentReason}</Paragraph>
        </>
    )
};


export default function SpecificSkillDescriptionModalChildren() {
    return (
        <ProgressBadgeProvider>
            <InnerSpecificSkillDescriptionModalChildren />
        </ProgressBadgeProvider>
    )
};