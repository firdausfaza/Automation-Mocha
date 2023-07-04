import chai, { assert, expect } from "chai";
import reqresApi from "$root/page/reqres.api";
import * as data from "$root/data/user.data";
import { getParams } from "$helper/lib-api";
import jsonSchema from 'chai-json-schema'
import * as schema from "$root/schema/list-user.schema";

chai.use(jsonSchema)

describe("List Users", () => {
    it("should return list of users", async () => {
        const param = getParams(data.LIST_USERS_PARAMS['page']);
   
        const response = await reqresApi.list_users(param);
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA);

    });
});