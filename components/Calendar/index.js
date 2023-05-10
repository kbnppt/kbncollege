import React from "react";
// import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import RevoCalendar from "revo-calendar";
// const localizer = momentLocalizer(moment)
// import 'react-big-calendar/lib/css/react-big-calendar.css'
// import Year from './Year'

// localizer?.formats?.yearHeaderFormat() = 'YYYY'

// const now = new Date()

// const myEventsList = [
//   {
//     id: 0,
//     title: 'All Day Event very long title',
//     allDay: true,
//     start: new Date(2015, 3, 0),
//     end: new Date(2015, 3, 1),
//   },
//   {
//     id: 1,
//     title: 'Long Event',
//     start: new Date(2015, 3, 7),
//     end: new Date(2015, 3, 10),
//   },

//   {
//     id: 2,
//     title: 'DTS STARTS',
//     start: new Date(2016, 2, 13, 0, 0, 0),
//     end: new Date(2016, 2, 20, 0, 0, 0),
//   },

//   {
//     id: 3,
//     title: 'DTS ENDS',
//     start: new Date(2016, 10, 6, 0, 0, 0),
//     end: new Date(2016, 10, 13, 0, 0, 0),
//   },

//   {
//     id: 4,
//     title: 'Some Event',
//     start: new Date(2015, 3, 9, 0, 0, 0),
//     end: new Date(2015, 3, 10, 0, 0, 0),
//   },
//   {
//     id: 5,
//     title: 'Conference',
//     start: new Date(new Date().setDate(new Date().getDay() +16 )),
//     end: new Date(new Date().setDate(new Date().getDay() + 18)),
//     desc: 'Big conference for important people',
//   },
//   {
//     id: 6,
//     title: 'Meeting',
//     start: new Date(2015, 3, 12, 10, 30, 0, 0),
//     end: new Date(2015, 3, 12, 12, 30, 0, 0),
//     desc: 'Pre-meeting meeting, to prepare for the meeting',
//   },
//   {
//     id: 7,
//     title: 'Lunch',
//     start: new Date(2015, 3, 12, 12, 0, 0, 0),
//     end: new Date(2015, 3, 12, 13, 0, 0, 0),
//     desc: 'Power lunch',
//   },
//   {
//     id: 8,
//     title: 'Meeting',
//     start: new Date(2015, 3, 12, 14, 0, 0, 0),
//     end: new Date(2015, 3, 12, 15, 0, 0, 0),
//   },
//   {
//     id: 9,
//     title: 'Happy Hour',
//     start: new Date(2015, 3, 12, 17, 0, 0, 0),
//     end: new Date(2015, 3, 12, 17, 30, 0, 0),
//     desc: 'Most important meal of the day',
//   },
//   {
//     id: 10,
//     title: 'Dinner',
//     start: new Date(2015, 3, 12, 20, 0, 0, 0),
//     end: new Date(2015, 3, 12, 21, 0, 0, 0),
//   },
//   {
//     id: 11,
//     title: 'Planning Meeting with Paige',
//     start: new Date(2015, 3, 13, 8, 0, 0),
//     end: new Date(2015, 3, 13, 10, 30, 0),
//   },
//   {
//     id: 11.1,
//     title: 'Inconvenient Conference Call',
//     start: new Date(2015, 3, 13, 9, 30, 0),
//     end: new Date(2015, 3, 13, 12, 0, 0),
//   },
//   {
//     id: 11.2,
//     title: "Project Kickoff - Lou's Shoes",
//     start: new Date(2015, 3, 13, 11, 30, 0),
//     end: new Date(2015, 3, 13, 14, 0, 0),
//   },
//   {
//     id: 11.3,
//     title: 'Quote Follow-up - Tea by Tina',
//     start: new Date(new Date().setDate(new Date().getDay() + 3)),
//     end: new Date(new Date().setDate(new Date().getDay() + 4)),
//   },
//   {
//     id: 12,
//     title: 'Late Night Event',
//     start: new Date(2015, 3, 17, 19, 30, 0),
//     end: new Date(2015, 3, 18, 2, 0, 0),
//   },
//   {
//     id: 12.5,
//     title: 'Late Same Night Event',
//     start: new Date(2015, 3, 17, 19, 30, 0),
//     end: new Date(2015, 3, 17, 23, 30, 0),
//   },
//   {
//     id: 13,
//     title: 'Multi-day Event',
//     start: new Date(new Date().setDate(new Date().getDay() - 1)),
//     end: new Date(new Date().setDate(new Date().getDay() + 1)),
//   },
//   {
//     id: 14,
//     title: 'Today',
//     start: new Date(new Date().setHours(new Date().getHours() - 3)),
//     end: new Date(new Date().setHours(new Date().getHours() + 3)),
//   },
//   {
//     id: 15,
//     title: 'Point in Time Event',
//     start: now,
//     end: now,
//   },
//   {
//     id: 16,
//     title: 'Video Record',
//     start: new Date(2015, 3, 14, 15, 30, 0),
//     end: new Date(2015, 3, 14, 19, 0, 0),
//   },
//   {
//     id: 17,
//     title: 'Dutch Song Producing',
//     start: new Date(2015, 3, 14, 16, 30, 0),
//     end: new Date(2015, 3, 14, 20, 0, 0),
//   },
//   {
//     id: 18,
//     title: 'Itaewon Halloween Meeting',
//     start: new Date(new Date().setDate(new Date().getDay() +6 )),
//     end: new Date(new Date().setDate(new Date().getDay() + 9)),
//   },
//   {
//     id: 19,
//     title: 'Online Coding Test',
//     start: new Date(new Date().setDate(new Date().getDay() +6 )),
//     end: new Date(new Date().setDate(new Date().getDay() + 8)),
//   },
//   {
//     id: 20,
//     title: 'An overlapped Event',
//     start: new Date(2015, 3, 14, 17, 0, 0),
//     end: new Date(2015, 3, 14, 18, 30, 0),
//   },
//   {
//     id: 21,
//     title: 'Phone Interview',
//     start: new Date(2015, 3, 14, 17, 0, 0),
//     end: new Date(2015, 3, 14, 18, 30, 0),
//   },
//   {
//     id: 22,
//     title: 'Cooking Class',
//     start: new Date(2015, 3, 14, 17, 30, 0),
//     end: new Date(2015, 3, 14, 19, 0, 0),
//   },
//   {
//     id: 23,
//     title: 'Go to the gym',
//     start: new Date(2015, 3, 14, 18, 30, 0),
//     end: new Date(2015, 3, 14, 20, 0, 0),
//   },
// ]

var eventList = [
  {
    name: "New Year",
    date: new Date('Sun Jan 01 2023 00:00:00 GMT+0530'),
    extra: {
      // icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
      text: `Ringing in the New Year is a cause for celebration, for spending time with friends and family, and for offering Happy New Year wishes. Browse the Happy New Year messages below to express your New Year wishes and sum up what the past year has meant to you.`,
    },
    allDay: true,
  },
  {
    name: "Holiday #1",
    date: Date.now(),
    extra: {
      text:<div>
        <div>Holiday</div>
      </div>
    },
    allDay: true,
  },
  {
    name: "Event #2",
    date: Date.now(),
    extra: {
      text:<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    },
    allDay: true,
  },
  {
    name: "Republic Day",
    date: new Date('Thu Jan 26 2023 05:30:00 GMT+0530'),
    extra: {
      text:<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    },
    allDay: true,
  },
  // {
  //   name: "Reservation",
  //   date: 1594422992000,
  //   extra: {
  //     icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
  //     text: "7 People",
  //   },
  // },
];

export default function Index() {
  return (
    <>
      <RevoCalendar
        events={eventList}
        style={{
          borderRadius: "5px",
          // border: "5px solid #4F6995",
        }}
        highlightToday={true}
        lang="en"
        primaryColor="#0a3689"
        secondaryColor="#D7E6EE"
        todayColor="#3B3966"
        textColor="#333333"
        indicatorColor="orange"
        animationSpeed={300}
        sidebarWidth={180}
        detailWidth={280}
        showDetailToggler={true}
        showSidebarToggler={true}
        onePanelAtATime={false}
        allowDeleteEvent={false}
        allowAddEvent={false}
        openDetailsOnDateSelection={true}
        timeFormat24={true}
        showAllDayLabel={false}
        detailDateFormat="DD MMMM YYYY"
        // deleteEvent={deleteEvent}
        // addEvent={addEvent}
      />
      {/* <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView="month"
          views={[ "month","agenda"]}
          // views={{
          //   month: true,
          //   year: Year
          // }}
          // messages={{ year: 'Year' }}
          /> */}
    </>
  );
}
