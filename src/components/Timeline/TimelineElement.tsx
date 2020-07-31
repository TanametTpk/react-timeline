import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

interface TimelineElementProps {
    isHilight: boolean;
    background: string;
    date: string;
    icon?: JSX.Element;
}

const TimelineElement: React.FC<TimelineElementProps> = ({
    isHilight,
    background,
    date,
    icon,
    children
}) => {

    const hightlightStyle: string = '7px solid  rgb(33, 150, 243)'

    return(
        <VerticalTimelineElement
            contentArrowStyle={{ borderRight: isHilight ? hightlightStyle : "" }}
            date={date}
            iconStyle={{ background, color: '#fff' }}
            icon={icon}
        >
            {children}
        </VerticalTimelineElement>
    )

}

export default TimelineElement