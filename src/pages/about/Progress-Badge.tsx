import { Card, Progress } from "antd";
import { SkillLevel } from "./about-field-texts";
const { Meta } = Card;

export interface IProgressBadgeProps {
    level: SkillLevel;
    title: string;
    description?: string;
}

const skillLevelToPercentMap: Record<SkillLevel, number> = {
    Beginner: 10,
    Novice: 30,
    Intermediate: 50,
    Advanced: 70,
    Expert: 90,
}

function ProgressBadge({level, title, description}: IProgressBadgeProps) {
    return (
        <Card
            hoverable
            cover={
                <Progress type="circle" percent={skillLevelToPercentMap[level]} />
            }
        >
            <Meta title={title} description={description} />
        </Card>
    )
}

export default ProgressBadge;