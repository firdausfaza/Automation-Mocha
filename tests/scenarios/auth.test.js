import restfulBooker from "$root/page/restful.api";
import * as data from "$root/data/user.data";

import { assert } from "chai";

describe("Auth Test ", () => {
  var token;

  /**
   * Ping Check
   */
  it("Ensure create token api is successfully working", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.CREATE_TOKEN_WITH_VALID_DATA
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["token"]);
    token = responseCreateToken.data.token;
  });
  it("Ensure create token api without username is failed", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.CREATE_TOKEN_WITHOUT_USERNAME
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["reason"]);
    assert.equal(
      responseCreateToken.data.reason,
      data.ERROR_INVALID_CREATE_TOKEN.reason
    );
  });

  it("Ensure create token api without username is failed", async () => {
    const responseCreateToken = await restfulBooker.createToken(
      data.CREATE_TOKEN_WITHOUT_PASSWORD
    );

    assert.equal(responseCreateToken.status, 200);
    assert.containsAllKeys(responseCreateToken.data, ["reason"]);
    assert.equal(
      responseCreateToken.data.reason,
      data.ERROR_INVALID_CREATE_TOKEN.reason
    );
  });
  it("Ensure create token api with empty username and password is failed", async () => {
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
