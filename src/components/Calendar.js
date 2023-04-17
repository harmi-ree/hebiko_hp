import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import jaLocale from "@fullcalendar/core/locales/ja";

export const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locales={[jaLocale]}
      locale="ja"
    />
  );
};

export default Calendar;

/* import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getCalendarEvents = async () => {
      const response = await fetch(
        `******`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setEvents(data.items);
    };

    getCalendarEvents();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;
 */
/* 
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { gapi } from "gapi-script";

const Calendar = () => {
  const [events, setEvents] = React.useState([]);

  gapi.load("client:auth2", () => {
    gapi.client.init({
      apiKey: "***",
      clientId:
        "***",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
      ],
      scope: "https://www.googleapis.com/auth/calendar",
    });
  });

  React.useEffect(() => {
    // GoogleカレンダーのIDを設定します。
    const calendarId =
      "****";

    // GoogleカレンダーAPIの認証情報を設定します。
    const api_key = "***";
    const client_id =
      "***";

    // Googleカレンダーからイベントを取得します。
    const googleCalendarApi = {
      googleCalendarApiKey: api_key,
      googleCalendarId: calendarId,
      eventClick: function (info) {
        info.jsEvent.preventDefault();
        window.open(info.event.url);
      },
      events: function (info, successCallback, failureCallback) {
        const now = new Date().toISOString();
        fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?singleEvents=true&timeMin=${now}&key=${api_key}`,
          {
            headers: {
              Authorization: `Bearer ${gapi.auth.getToken().access_token}`,
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            const events = result.items.map((item) => {
              return {
                title: item.summary,
                start: item.start.dateTime || item.start.date,
                end: item.end.dateTime || item.end.date,
                url: item.htmlLink,
              };
            });
            successCallback(events);
            setEvents(events);
          })
          .catch((error) => {
            failureCallback(error);
          });
      },
    };

    // fullcalendar-reactを使用してカレンダーを表示します。
    return (
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        //eventResize={handleEventResize}
        //eventDrop={handleEventDrop}
        googleCalendarApi={googleCalendarApi}
      />
    );
  }, []);

  return <div id="calendar"></div>;
};

export default Calendar;
 */
