import restfulBooker from "$root/page/restful.api";
import { assert } from "chai";

describe("CHECKING PING ", () => {
  var token;
  var bookingId;
  var firstName;

  /**
   * Ping Check
   */
  it("Ensure PING CHECK API is running", async () => {
    const responsePingCheck = await restfulBooker.pingCheck();
    assert.equal(responsePingCheck.status, 201);
    assert.equal(responsePingCheck.data, "Created");
  });

  
});