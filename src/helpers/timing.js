import moment from "moment";
const currentDate = moment(moment().format("YYYY-MM-DD HH:mm"));

const timing = {
  // Confirmed Date
  ceremonyDeadline: "2024-12-01 11:00",
  // Unconfirmed Date
  receptionDeadline: "2024-12-07 11:00",
  // Confirmed Date
  earlyBird: "2024-12-01 05:00",
  afterCeremony: () =>
    !!moment(currentDate).isSameOrAfter(timing.ceremonyDeadline),
  afterEarlyBird: () => !!moment(currentDate).isSameOrAfter(timing.earlyBird),
};
export default timing;
