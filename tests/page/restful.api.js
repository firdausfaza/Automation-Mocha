import BaseAPI from "$root/page/base.api";
import { update } from "cypress/types/lodash";
import authBaseAPI from "$root/page/authbase.api";

const restfulBooker = {
  pingCheck: () => BaseAPI.get("/ping"),
  createToken: (data) => BaseAPI.post("/auth", data),
  createBooking: (data) => BaseAPI.post("/booking", data),
  getAllBooking: () => BaseAPI.get("/booking"),
  getBooking: (bookingId) => BaseAPI.get(`/booking/${bookingId}`),
  getBookingByFirstName: (firstName) =>
    BaseAPI.get("/booking/?firstname=" + firstName),
  updateBooking: (bookingId, data) =>
    authBaseAPI.put(`/booking/${bookingId}`, data),
};

export default restfulBooker;
