import React from "react";

interface WithSectionIdAndYOffsetProps {
    sectionId: string;
    yOffset: number
}

const verticalScrollToSectionHOC = <P extends WithSectionIdAndYOffsetProps>(
    WrappedComponent: React.ComponentType<P>
) => {
    return class extends React.Component<P & WithSectionIdAndYOffsetProps> {
        handleClick = () => {
            const { sectionId, yOffset } = this.props;
            const section = document.getElementById(sectionId);
            if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' })
            }
        }

        render() {
            return <WrappedComponent {...this.props} onClick={this.handleClick} />
        }
    }
}

export default verticalScrollToSectionHOC;