import { useCallback } from 'react';
import { scrollToSection } from './helpers/scroll-to-section';

const useVerticalScrollToSection = (sectionId: string, yOffset = -84) => {
  const handleClick = useCallback(() => {
    scrollToSection(sectionId, yOffset);
  }, [sectionId, yOffset]);

  return handleClick;
};

export default useVerticalScrollToSection;
