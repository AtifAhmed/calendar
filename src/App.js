import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import CalendarForm from "./CalendarForm";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { connect } from "react-redux";
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const App = ({ allCalendarEvents, maxId }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [calendarEvent, setCalendarEvent] = useState({});
  const [data, setData] = useState(allCalendarEvents);

  useEffect(() => {
    setData(allCalendarEvents);
  }, [allCalendarEvents]);
  const handleSelect = (event, e) => {
    const { start, end } = event;

    const data = { id: maxId, title: "", start, end, allDay: false };
    setShowAddModal(true);
    setShowEditModal(false);
    setCalendarEvent(data);
  };
  const handleSelectEvent = (event, e) => {
    setShowAddModal(false);
    setShowEditModal(true);
    let { id, title, start, end, allDay } = event;
    start = new Date(start);
    end = new Date(end);
    const data = { id, title, start, end, allDay };
    setCalendarEvent(data);
  };
  const hideModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };
  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = data.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });
    setData(nextEvents);
  };
  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const idx = data.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...data];
    nextEvents.splice(idx, 1, updatedEvent);
    setData(nextEvents);
  };
  return (
    <div className="App">
      <Modal show={showAddModal} onHide={hideModals}>
        <Modal.Header closeButton>
          <Modal.Title>Add Calendar Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CalendarForm
            calendarEvent={calendarEvent}
            onCancel={hideModals}
            edit={false}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showEditModal} onHide={hideModals}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Calendar Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CalendarForm
            calendarEvent={calendarEvent}
            onCancel={hideModals}
            edit={true}
          />
        </Modal.Body>
      </Modal>

      <DragAndDropCalendar
        popup
        localizer={localizer}
        events={data}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelect}
        onSelectEvent={handleSelectEvent}
        onDragStart={console.log}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        style={{ height: "100%", "min-height": 500 }}
      />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    allCalendarEvents: state.calendar.allCalendarEvents,
    maxId: state.calendar.maxId,
  };
}

export default connect(mapStateToProps, null)(App);
