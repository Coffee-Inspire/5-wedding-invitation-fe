import moment from "moment";
const currentDate = moment(moment().format("YYYY-MM-DD HH:mm"));

const timing = {
  // Confirmed Date
  ceremonyDeadline: "2022-12-03 11:00",
  // Unconfirmed Date
  receptionDeadline: "2022-12-05 11:00",
  afterCeremony: () =>
    !!moment(currentDate).isSameOrAfter(timing.ceremonyDeadline),
};
export default timing;
