const domain = "https://master-backend.netlify.app/api";

export const apis = {
  ping: {
    get: `${domain}/check/db`,
  },
  rsvp: {
    get: `${domain}/rsvp`,
    create: `${domain}/rsvp/add`,
  },
  wish: {
    get: `${domain}/wish`,
    create: `${domain}/wish/add`,
  },
};
