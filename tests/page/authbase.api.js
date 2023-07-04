import axios from "axios";
import dotenv from "dotenv";
import restfulBooker from "$root/page/restful";
import * as data from "$root/data/user.data";

dotenv.config();

const authBaseAPI = async () => {
  const responseCreateToken = await restfulBooker.createToken(
    data.VALID_CREATE_TOKEN
  );
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Cookie: `token=${responseCreateToken.data.token}`,
      Authorization: `Bearer ${responseCreateToken.data.token}`,
    },
    validateStatus: function () {
      return true;
    },
  });
};

export default authBaseAPI;