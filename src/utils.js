import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

export const dateFormat = date => {
  if (date) {
    return format(parseISO(date), "yyyy-MM-dd hh:ss");
  }
};

export const eventTypeFormat = event =>
  event
    .match(/[A-Z]*[^A-Z]+/g)
    .filter(word => word !== "Event")
    .join(" ");
