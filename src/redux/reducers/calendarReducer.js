import * as actiontypes from "../constants";
import calendarEvents from "../../calendarEvents";
const initialState = {
  allCalendarEvents: calendarEvents,
  maxId: 14,
};
function calendar(state = initialState, action) {
  switch (action.type) {
    case actiontypes.ADD_EVENT: {
      const allEvents = state.allCalendarEvents;
      const id = state.maxId + 1;

      return {
        ...state,
        allCalendarEvents: [...allEvents, action.data],
        maxId: id,
      };
    }

    case actiontypes.UPDATE_EVENT: {
      const allEvents = state.allCalendarEvents;
      var foundIndex = allEvents.findIndex((x) => x.id == action.data.id);
      allEvents[foundIndex] = action.data;
      return {
        ...state,
        allCalendarEvents: allEvents,
      };
    }
    case actiontypes.DELETE_EVENT: {
      const allEvents = state.allCalendarEvents.filter(
        (item) => item.id !== action.selectedId
      );

      return {
        ...state,
        allCalendarEvents: allEvents,
      };
    }
    default:
      return state;
  }
}

export default calendar;
