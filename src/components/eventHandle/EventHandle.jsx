import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { MOCK_EVENTS } from '../event';

const EventHandle = () => {
    const localizer = momentLocalizer(moment)
    const events = MOCK_EVENTS.map((event) => {
      // new Date(Y, M, D, H, MIN)
      return {
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
        color: event.color,
      };
    });
    return (
        <div className='lg:my-20 mx-14'>
            <Calendar
        localizer={localizer}
        startAccessor={"start"}
        events={events}
        endAccessor={"end"}
        style={{
          height: "900px",
        }}
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor: event.color,
            },
          };
        }}
        onSelectEvent={(event) => alert(event.title)}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      />
        </div>
    );
};

export default EventHandle;
