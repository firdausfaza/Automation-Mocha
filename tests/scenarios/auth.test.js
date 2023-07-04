import restfulBooker from "$root/page/restful.api";
import * as data from "$root/data/user.data";

import { assert } from "chai";

describe("Auth Test ", () => {
  var token;
  var bookingId;
  var firstName;

  /**
   * Ping Check
   */
  it("Ensure CREATE TOKEN API is successfully working", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.VALID_CREATE_TOKEN
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["token"]);
    //store token into token variable
    // console.log(responseCreateToken.data.token);
    token = responseCreateToken.data.token;
  });
  it("Ensure CREATE TOKEN API without username is failed", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.INVALID_CREATE_TOKEN_WITHOUT_USERNAME
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["reason"]);
    assert.equal(
      responseCreateToken.data.reason,
      data.ERROR_INVALID_CREATE_TOKEN.reason
    );
  });

  it("Ensure CREATE TOKEN API without username is failed", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.INVALID_CREATE_TOKEN_WITHOUT_PASSWORD
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["reason"]);
    assert.equal(
      responseCreateToken.data.reason,
      data.ERROR_INVALID_CREATE_TOKEN.reason
    );
  });
  it("Ensure CREATE TOKEN API with empty username and password is failed", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.INVALID_CREATE_TOKEN_WITH_EMPTY_USERNAME_PASSWORD
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["reason"]);
    assert.equal(
      responseCreateToken.data.reason,
      data.ERROR_INVALID_CREATE_TOKEN.reason
    );
  });
});
