import { useProgressBadge } from './ProgressBadgeContext';
import ProgressBadgeDisplay, {
  IProgressBadgeProps,
} from './ProgressBadgeDisplay';

function InteractiveProgressBadge(props: IProgressBadgeProps) {
  const { showModal } = useProgressBadge();

  const handleClick = () => {
    showModal({
      dashPercent: props.dashPercent,
      level: props.level,
      levelAssessmentReason: props.levelAssessmentReason,
      title: props.title,
    });
  };

  return (
    <div style={{ height: '100%' }} onClick={handleClick}>
      <ProgressBadgeDisplay {...props} />
    </div>
  );
}

export default InteractiveProgressBadge;
