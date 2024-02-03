import { Card, Progress } from "antd";
import { SkillLevel } from "./about-me-field-texts";
import './Progress-Badge.css';
const { Meta } = Card;

export interface IProgressBadgeProps {
    level: SkillLevel;
    title: string;
    dashPercent: number;
    description?: string;
    includeDescription?: boolean;
}

// const skillLevelToPercentMap: Record<SkillLevel, number> = {
//     Beginner: 10, // [10, 29]
//     Novice: 30, // [30, 49]
//     Intermediate: 50, // [50-69]
//     Advanced: 70, // [70-89]
//     Expert: 90, // [90-100]
// }

const conicColors = {
    '0%': '#add8e6',
    '20%': '#90ee90',
    '40%': '#ffd700',
    '60%': '#ffa500',
    '80%': '#6a0dad',
}

function ProgressBadge({
    level,
    title,
    dashPercent,
    description,
    includeDescription,
}: IProgressBadgeProps) {
    return (
        <Card
            classNames={{
                body: 'progress-badge-card-body'
            }}
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
            <Meta className="progress-badge-meta" title={title} description={ includeDescription ? description : undefined } />
        </Card>
    )
}

export default ProgressBadge;