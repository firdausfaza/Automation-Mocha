import { assert } from "chai";
import reqresApi from "$root/page/reqres.api";
import * as data from "$root/data/user.data";

describe("Register", () => {
  it("should return error when register with invalid email", async () => {
    const response = await reqresApi.register(data.INVALID_REGISTER);
    assert.equal(response.status, 400 );
    assert.equal(
      response.data.error,
      "Note: Only defined users succeed registration");
  });
  it("should return valid token when register with valid data", async () => {
    const response = await reqresApi.register(data.VALID_REGISTER);
    assert.equal(response.status, 200);
    assert.isString(response.data.token);
    assert.isNotEmpty(response.data.token);
    assert.equal(response.data.id, 4);
    
  }
  );
});
