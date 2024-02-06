import { List } from 'antd';
import { TabNames } from './about-me-field-texts';
import InteractiveProgressBadge from './InteractiveProgressBadge';
import { IProgressBadgeProps } from './ProgressBadgeDisplay';

export type SkillTabItemProps = {
  tabName: TabNames | 'All';
  arr: Array<IProgressBadgeProps & { tabs: Set<TabNames> }>;
};

function SkillTabList({ tabName, arr }: SkillTabItemProps) {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      size="small"
      itemLayout="horizontal"
      dataSource={
        tabName === 'All' ? arr : arr.filter((tech) => tech.tabs.has(tabName))
      }
      renderItem={(item) => (
        <List.Item style={{ borderBottom: 0 }}>
          <InteractiveProgressBadge {...item} />
        </List.Item>
      )}
    />
  );
}

export default SkillTabList;
