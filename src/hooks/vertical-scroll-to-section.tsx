import { useCallback } from "react"

const useVerticalScrollToSection = (sectionId: string, yOffset = -84) => {
    const handleClick = useCallback(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }, [sectionId, yOffset]);

    return handleClick;
}

export default useVerticalScrollToSection;