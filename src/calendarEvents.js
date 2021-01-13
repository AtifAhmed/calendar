const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
//alert(new Date(year, month, 20, 0, 0, 0));
export default [
  {
    id: 1,
    title: "3 Day Seminar",
    start: new Date(year, month - 1, 7),
    end: new Date(year, month - 1, 10),
  },

  {
    id: 2,
    title: "Holidays2",
    start: new Date(year, month - 1, 13, 0, 0, 0),
    end: new Date(year, month - 1, 19, 0, 0, 0),
  },

  {
    id: 3,
    title: "Client Meeting",
    start: new Date(year, month - 1, 6, 10, 0, 0),
    end: new Date(year, month - 1, 6, 11, 0, 0),
    desc: "Big conference for important people",
  },

  {
    id: 4,
    title: "Design Meeting",
    start: new Date(year, month - 1, 19, 10, 0, 0),
    end: new Date(year, month - 1, 19, 10, 30, 0),
  },
  {
    id: 5,
    title: "Tech Meeting",
    start: new Date(year, month - 1, 19, 12, 0, 0),
    end: new Date(year, month - 1, 19, 12, 30, 0),
  },
  {
    id: 6,
    title: "Drinks",
    start: new Date(year, month - 1, 19, 16, 0, 0),
    end: new Date(year, month - 1, 19, 16, 30, 0),
  },
  {
    id: 7,
    title: "Client Visit",
    start: new Date(year, month, 19, 13, 0, 0),
    end: new Date(year, month, 19, 14, 30, 0),
  },
  {
    id: 8,
    title: "React Training",
    start: new Date(year, month, 19, 7, 0, 0),
    end: new Date(year, month, 19, 8, 30, 0),
  },
  {
    id: 9,
    title: "Company Lunch",
    start: new Date(year, month, 9, 12, 0, 0),
    end: new Date(year, month, 9, 13, 30, 0),
  },
  {
    id: 10,
    title: "Conference",
    start: new Date(year, month, now.getDate(), 9, 0, 0),
    end: new Date(year, month, now.getDate(), 17, 0, 0),
  },
  {
    id: 11,
    title: "Interview",
    start: new Date(year, month + 1, 9, 13, 0, 0),
    end: new Date(year, month + 1, 9, 14, 30, 0),
  },
  {
    id: 12,
    title: "Birthday Party",
    start: new Date(year, month + 1, 9, 17, 0, 0),
    end: new Date(year, month + 1, 9, 19, 30, 0),
  },
  {
    id: 13,
    title: "Kids Movie",
    start: new Date(year, month + 1, 9, 20, 0, 0),
    end: new Date(year, month + 1, 9, 21, 30, 0),
  },
];
