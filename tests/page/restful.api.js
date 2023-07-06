import BaseAPI from "$root/page/base.api";
import authBaseAPI from "$root/page/authbase.api";

const restfulBooker = {
  pingCheck: () => BaseAPI.get("/ping"),
  createToken: (data) => BaseAPI.post("/auth", data),
  createBooking: (data) => BaseAPI.post("/booking", data),
  getAllBooking: () => BaseAPI.get("/booking"),
  getBooking: (bookingId) => BaseAPI.get(`/booking/${bookingId}`),
  getBookingByFirstName: (firstName) =>
    BaseAPI.get("/booking/?firstname=" + firstName),
  updateBooking: async (param, data) =>
    (await authBaseAPI()).put("/booking/" + param, data),
  deleteBooking: async (param) =>
    (await authBaseAPI()).delete("/booking/" + param),
};

export default restfulBooker;
