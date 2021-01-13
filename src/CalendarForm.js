import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import Button from "react-bootstrap/Button";
import * as actions from "redux/actions";
import { enGB } from "date-fns/locale";
import { connect } from "react-redux";
registerLocale("es", enGB);

const buttonStyle = { marginRight: 10 };
const CalendarForm = ({
  calendarEvent,
  onCancel,
  edit,
  dispatchAddEvent,
  dispatchDeleteEvent,
  dispatchUpdateEvent,
}) => {
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [id, setId] = React.useState(0);
  React.useEffect(() => {
    setTitle(calendarEvent.title);
    setStart(calendarEvent.start);
    setEnd(calendarEvent.end);
    setId(calendarEvent.id);
  }, [
    calendarEvent.title,
    calendarEvent.start,
    calendarEvent.end,
    calendarEvent.id,
  ]);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!title || !start || !end) {
      return;
    }
    if (+start > +end) {
      alert("Start date must be earlier than end date");
      return;
    }
    const data = { id, title, start, end };
    if (!edit) {
      dispatchAddEvent(data);
    } else {
      dispatchUpdateEvent(data);
    }

    onCancel();
  };
  const handleStartChange = (date) => setStart(date);
  const handleEndChange = (date) => setEnd(date);
  const handleTitleChange = (ev) => setTitle(ev.target.value);
  const deleteCalendarEvent = async () => {
    dispatchDeleteEvent(calendarEvent.id);
    onCancel();
  };
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            value={title || ""}
            onChange={handleTitleChange}
            isInvalid={!title}
          />
          <Form.Control.Feedback type="invalid">{!title}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="start">
          <Form.Label>Start</Form.Label>
          <br />
          <DatePicker
            locale="es"
            showTimeSelect
            className="form-control"
            selected={start}
            onChange={handleStartChange}
            dateFormat="Pp"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="end">
          <Form.Label>End</Form.Label>
          <br />
          <DatePicker
            locale="es"
            showTimeSelect
            className="form-control"
            selected={end}
            onChange={handleEndChange}
            dateFormat="Pp"
          />
        </Form.Group>
      </Form.Row>
      <Button type="submit" style={buttonStyle}>
        Save
      </Button>
      <Button type="button" style={buttonStyle} onClick={deleteCalendarEvent}>
        Delete
      </Button>
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

const mapDispatchToProps = {
  dispatchAddEvent: actions.addEvent,
  dispatchDeleteEvent: actions.deleteEvent,
  dispatchUpdateEvent: actions.updateEvent,
};
export default connect(null, mapDispatchToProps)(CalendarForm);
