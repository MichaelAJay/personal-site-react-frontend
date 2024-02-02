import { List } from "antd";
import { TabNames } from "./about-field-texts";
import ProgressBadge, { IProgressBadgeProps } from "./Progress-Badge";

export type SkillTableItemProps = {
    tabName: TabNames;
    arr: Array<IProgressBadgeProps & { tabs: Set<TabNames> }>;
}

function SkillTabList({tabName, arr}: SkillTableItemProps) {
    return (
        <List
        grid={{ gutter: 16, column: 4 }}
        size="small"
        itemLayout="horizontal"
        dataSource={arr.filter(tech => tech.tabs.has(tabName))}
        renderItem={item => (
            <List.Item>
                <ProgressBadge {...item}/>
            </List.Item>
        )}
    />
    )
}

export default SkillTabList;