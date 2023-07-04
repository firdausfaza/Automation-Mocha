import BaseAPI from "$root/page/base.api";

const restfulBooker = {
  pingCheck: () => BaseAPI.get("/ping"),
  createToken: (data) => BaseAPI.post("/auth", data),
};

export default restfulBooker;
