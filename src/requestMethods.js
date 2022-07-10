import axios from "axios";

const BASE_URL = "http://localhost:4000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQ4Mjc3NDNjZTNkNmU0NzE5MTFmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzQ3NTUwNywiZXhwIjoxNjU3NzM0NzA3fQ.Th6uDOtK2lskzfaUYEzfvKkYgQsUWr9K9lDEp5GOT9E";
export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
