import { GET_EVENTS, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./constants";

export function addEvent(data) {
  return {
    type: ADD_EVENT,
    data,
  };
}
export function deleteEvent(selectedId) {
  return {
    type: DELETE_EVENT,
    selectedId,
  };
}
export function updateEvent(data) {
  return {
    type: UPDATE_EVENT,
    data,
  };
}
