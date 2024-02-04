import ProgressBadgeDisplay, { IProgressBadgeProps } from "./ProgressBadgeDisplay";

function InteractiveProgressBadge(props: IProgressBadgeProps) {
    const handleClick = () => {
        console.log('clicky clicky')
    }

    return (
        <div onClick={handleClick}>
            <ProgressBadgeDisplay {...props} />
        </div>
    )
}

export default InteractiveProgressBadge;