/**
 * Find an element by id and scroll to it
 */
export const scrollToSection = (sectionId: string, yOffset: number = -84): void => {
    const section = document.getElementById(sectionId);
    if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}