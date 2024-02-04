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
        <div>
            <List
                grid={{ gutter: 16, column: 5 }}
                size="small"
                dataSource={mappedSkillLevels}
                renderItem={item => (
                    <List.Item className="skills-description-list-item">
                        <ProgressBadge {...item} includeDescription={true} />
                    </List.Item>
                )}
            />
        </div>
    )
};

export default SkillsDescriptionModalChildren;