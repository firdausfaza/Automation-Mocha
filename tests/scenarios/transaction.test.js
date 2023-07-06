import restfulBooker from "$root/page/restful.api";
import * as data from "$root/data/user.data";
import { assert } from "chai";

var bookingId;
var firstName;
describe("Transaction Data Test ", () => {
  it("Ensure create booking api is successfully working", async () => {
    const responseCreateBooking = await restfulBooker.createBooking(
      data.CREATE_BOOKING
    );
    assert.equal(responseCreateBooking.status, 200);
    assert.containsAllKeys(responseCreateBooking.data, ["bookingid"]);
    bookingId = responseCreateBooking.data.bookingid;
  });
  it("Ensure get all booking api is successfully working", async () => {
    const responseGetAllBooking = await restfulBooker.getAllBooking();
    assert.equal(responseGetAllBooking.status, 200);
  });
  it("Ensure get booking by id api is successfully working", async () => {
    const responseGetBooking = await restfulBooker.getBooking(bookingId);
    assert.equal(responseGetBooking.status, 200);
    assert.containsAllKeys(responseGetBooking.data, ["firstname"]);
    firstName = responseGetBooking.data.firstname;
  });
  it("Ensure get booking by name api is successfully working", async () => {
    const responseGetBookingByName = await restfulBooker.getBookingByFirstName(
      firstName
    );
    assert.equal(responseGetBookingByName.status, 200);
    // console.log(responseGetBookingByName.data[0].bookingid);
    assert.isArray(responseGetBookingByName.data);
    assert.equal(
      (
        await restfulBooker.getBooking(
          responseGetBookingByName.data[0].bookingid
        )
      ).data.firstname,
      firstName
    );
  });

  it("Ensure update booking api is successfully working", async () => {
    const responseUpdateBooking = await restfulBooker.updateBooking(
      bookingId,
      data.UPDATE_BOOKING
    );
    assert.equal(responseUpdateBooking.status, 200);
    assert.containsAllKeys(responseUpdateBooking.data, ["firstname"]);
    assert.equal(
      responseUpdateBooking.data.firstname,
      data.UPDATE_BOOKING.firstname
    );
  });
  it("Ensure delete booking api is successfully working", async () => {
    const responseDeleteBooking = await restfulBooker.deleteBooking(bookingId);
    assert.equal(responseDeleteBooking.status, 201);
  });
});
