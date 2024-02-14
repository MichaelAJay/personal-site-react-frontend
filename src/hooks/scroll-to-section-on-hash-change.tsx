import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "./helpers/scroll-to-section";

export const useScrollToSectionOnHashChange = (yOffset: number = -84) => {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace('#', '');
        if (sectionId) {
            scrollToSection(sectionId, yOffset);
        }
    }, [location, yOffset])
}