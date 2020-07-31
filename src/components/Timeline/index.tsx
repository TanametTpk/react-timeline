import React from 'react'
import TimelineElement from './TimelineElement';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export interface TimeEvent {
    backgroundColor: string;
    date: string;
    icon?: JSX.Element;
    content?: JSX.Element;
}

export interface TimelineProps {
    events: TimeEvent[]
}

const Timeline: React.FC<TimelineProps> = ({events}) => {

    const isFirstElement = (index: number): boolean => {
        return index === 0
    }

    return (
        <div>
            <VerticalTimeline>
                {
                    events.map((event, index) => 
                        <TimelineElement
                            key={index}
                            isHilight={isFirstElement(index)}
                            date={event.date}
                            background={event.backgroundColor}
                        >
                            {event.content}
                        </TimelineElement>
                    )
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
