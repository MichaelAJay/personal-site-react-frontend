import { useMemo } from 'react';
import { TabNames } from './about-me-field-texts';
import InteractiveProgressBadge from './InteractiveProgressBadge';
import { IProgressBadgeProps } from './ProgressBadgeDisplay';
import './SkillTabList.css';

export type SkillTabItemProps = {
  tabName: TabNames | 'All';
  arr: Array<IProgressBadgeProps & { tabs: Set<TabNames> }>;
};

function SkillTabList({ tabName, arr }: SkillTabItemProps) {
  const items = useMemo(() => {
    if (tabName === 'All') {
      return arr;
    }
    return arr.filter((item) => item.tabs.has(tabName));
  }, [arr, tabName]);

  return (
    <div className="skills-grid-container">
      {items.map((item, index) => (
        <div key={index} className="skills-grid-item">
          <InteractiveProgressBadge {...item} />
        </div>
      ))}
    </div>
  );
}

export default SkillTabList;
