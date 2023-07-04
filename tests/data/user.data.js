export const VALID_CREATE_TOKEN = {
  username: "admin",
  password: "password123",
};

export const INVALID_CREATE_TOKEN_WITHOUT_USERNAME = {
  username: "",
  password: "password123",
};

export const INVALID_CREATE_TOKEN_WITHOUT_PASSWORD = {
  username: "admin",
  password: "",
};

export const INVALID_CREATE_TOKEN_WITHOUT_USERNAME_AND_PASSWORD = {
  username: "",
  password: "",
};

export const ERROR_INVALID_CREATE_TOKEN = {
  reason: "Bad credentials",
};

export const CREATE_BOOKING = {
  firstname: "Faza",
  lastname: "Faza",
  totalprice: 222,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-02-02",
  },
  additionalneeds: "Breakfast",
};

export const UPDATE_BOOKING = {
  firstname: "Oxlip",
  lastname: "test",
  totalprice: 1000,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-03-03",
  },
  additionalneeds: "Lunch",
};
