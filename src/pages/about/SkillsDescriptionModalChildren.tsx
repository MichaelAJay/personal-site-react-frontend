import { List } from "antd";
import { SkillLevel, skillLevel } from "./about-me-field-texts";
import ProgressBadge, { IProgressBadgeProps } from "./Progress-Badge";
import './SkillsDescriptionModalChildren.css';

const mappedSkillLevels: Array<IProgressBadgeProps> = [];
for (const property in skillLevel) {
    mappedSkillLevels.push({
        level: skillLevel[property as SkillLevel]['name'],
        title: skillLevel[property as SkillLevel]['name'],
        dashPercent: skillLevel[property as SkillLevel]['dashPercent'],
        description: skillLevel[property as SkillLevel]['description']
    });
}

function SkillsDescriptionModalChildren() {
    return (
        <div className="skills-grid-container">
            {mappedSkillLevels.map((item, index) => (
                <div className="skills-grid-item">
                    <ProgressBadge {...item} includeDescription={true} />
                </div>
            ))}
        </div>
    )
};

export default SkillsDescriptionModalChildren;