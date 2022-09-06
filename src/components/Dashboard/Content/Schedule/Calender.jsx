import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Schedule.css'


const localizer = momentLocalizer(moment)

const Calender = () => {
    const myEventsList = [
        {
            'title': 'All Day Event very long title',
            'allDay': true,
            'start': new Date(),
            'end': new Date()
        },
        {
            'title': 'Long Event',
            'start': new Date(2015, 3, 7),
            'end': new Date(2015, 3, 10)
        },

        {
            'title': 'Some Event',
            'start': new Date(2015, 3, 9, 0, 0, 0),
            'end': new Date(2015, 3, 9, 0, 0, 0)
        },
        {
            'title': 'Conference',
            'start': new Date(2015, 3, 11),
            'end': new Date(2015, 3, 13),
            desc: 'Big conference for important people'
        },
        {
            'title': 'Meeting',
            'start': new Date(2015, 3, 12, 10, 30, 0, 0),
            'end': new Date(2015, 3, 12, 12, 30, 0, 0),
            desc: 'Pre-meeting meeting, to prepare for the meeting'
        },
        {
            'title': 'Lunch',
            'start': new Date(2015, 3, 12, 12, 0, 0, 0),
            'end': new Date(2015, 3, 12, 13, 0, 0, 0),
            desc: 'Power lunch'
        },
    ]
    return (
        <div className='calendar-wrapper'>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default Calender