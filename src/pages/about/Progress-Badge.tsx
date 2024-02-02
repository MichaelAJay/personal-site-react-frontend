import { Card, Progress } from "antd";
import { SkillLevel } from "./about-field-texts";
import './Progress-Badge.css';
const { Meta } = Card;

export interface IProgressBadgeProps {
    level: SkillLevel;
    title: string;
    dashPercent: number;
    description?: string;
}

const skillLevelToPercentMap: Record<SkillLevel, number> = {
    Beginner: 10,
    Novice: 30,
    Intermediate: 50,
    Advanced: 70,
    Expert: 90,
}

const conicColors = {
    '0%': '#add8e6',
    '20%': '#90ee90',
    '40%': '#ffd700',
    '60%': '#ffa500',
    '80%': '#6a0dad',
}

function ProgressBadge({level, title, dashPercent, description}: IProgressBadgeProps) {
    return (
        <Card
            className="progress-badge-card"
            hoverable
            cover={
                <Progress
                    className="progress-badge-cover"
                    type="dashboard"
                    percent={dashPercent}
                    showInfo={false}
                    strokeColor={conicColors}
                />
            }
        >
            <Meta className="progress-badge-title" title={title} />
        </Card>
    )
}

export default ProgressBadge;